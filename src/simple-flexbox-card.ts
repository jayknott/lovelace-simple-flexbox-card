/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LitElement,
  html,
  customElement,
  property,
  CSSResult,
  TemplateResult,
  css,
  PropertyValues,
  internalProperty,
} from 'lit-element';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  LovelaceCard,
  getLovelace,
  LovelaceCardConfig,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types

import type { SimpleFlexboxCardConfig } from './types';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';

const cardHelpers = (window as any).loadCardHelpers()
  ? (window as any).loadCardHelpers()
  : undefined;

/* eslint no-console: 0 */
console.info(
  `%c  SIMPLE-FLEXBOX-CARD  \n%c  ${localize(
    'common.version',
  )} ${CARD_VERSION}        `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'simple-flexbox-card',
  name: 'Simple Flexbox Card',
  description: 'Display a simple flexbox in Lovelace dashboards.',
});

@customElement('simple-flexbox-card')
export class SimpleFlexboxCard extends LitElement {
  public static getStubConfig(): object {
    return {};
  }

  // TODO Add any properties that should cause your element to re-render here
  // https://lit-element.polymer-project.org/guide/properties
  @property({ attribute: false }) public hass!: HomeAssistant;
  @internalProperty() private config!: SimpleFlexboxCardConfig;
  @internalProperty() private _cards: Array<LovelaceCardConfig> = [];
  @internalProperty() private _refCards: Array<LovelaceCard> = [];

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public async setConfig(config: SimpleFlexboxCardConfig): Promise<void> {
    // TODO Check for required fields and that they are of the proper format
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (config.test_gui) {
      getLovelace().setEditMode(true);
    }

    this.config = config;
    if (config.cards) this._cards = config.cards;
  }

  renderCard() {
    const promises = this._cards.map((card) => this.createCardElement(card));
    Promise.all(promises).then((card_objects) => {
      this._refCards = card_objects;
    });
  }

  createError(error: Error, config: LovelaceCardConfig): Promise<LovelaceCard> {
    return this.createElement('hui-error-card', {
      type: 'error',
      error,
      config,
    });
  }

  async createElement(
    tag: string,
    config: LovelaceCardConfig,
  ): Promise<LovelaceCard> {
    if (cardHelpers) {
      const cardHelper = await cardHelpers;
      return cardHelper.createCardElement(config);
    }

    const element = document.createElement(tag) as LovelaceCard;

    try {
      element.setConfig(config);
    } catch (err) {
      console.error(tag, err);
      return this.createError(err.message, config);
    }

    console.log(element);

    return element;
  }

  async createCardElement(
    cardConfig: LovelaceCardConfig,
  ): Promise<LovelaceCard> {
    let tag = cardConfig.type;

    if (tag.startsWith('divider')) {
      tag = `hui-divider-row`;
    } else if (tag.startsWith('custom:')) {
      tag = tag.substr('custom:'.length);
    } else {
      tag = `hui-${tag}-card`;
    }

    const element = await this.createElement(tag, cardConfig);

    element.hass = this.hass;

    element.addEventListener(
      'll-rebuild',
      (ev) => {
        ev.stopPropagation();
        this.createCardElement(cardConfig).then(() => {
          this.renderCard();
        });
      },
      { once: true },
    );

    return element;
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this.config) {
      return false;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | void {
    const items = this._refCards.map((card) => html`<li>${card}</li>`);

    return html`<ul class="flex-container">
      ${items}
    </ul>`;
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return css`
      .flex-container {
        padding: 0;
        margin: 0 0 0 0;
        list-style: none;
        -ms-box-orient: horizontal;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -moz-flex;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }
    `;
  }
}
