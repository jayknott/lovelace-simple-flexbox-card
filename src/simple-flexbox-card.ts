import {
  HomeAssistant,
  LovelaceCard,
  LovelaceCardConfig,
} from 'custom-card-helpers';
import {
  customElement,
  LitElement,
  html,
  css,
  internalProperty,
  property,
} from 'lit-element';
import type { SimpleFlexboxCardConfig } from './types';
import { CARD_VERSION } from './const';
import { localize } from './localize/localize';

console.info(
  `%c  SIMPLE-FLEXBOX-CARD  \n%c  ${localize(
    'common.version',
  )} ${CARD_VERSION}        `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

const createError = (
  error: Error,
  config: LovelaceCardConfig,
): Promise<LovelaceCard> => {
  return createCardFromHelper('hui-error-card', {
    type: 'error',
    error,
    config,
  });
};

const cardHelpers = (window as any).loadCardHelpers()
  ? (window as any).loadCardHelpers()
  : undefined;

const createCardFromHelper = async (
  tag: string,
  config: LovelaceCardConfig,
): Promise<LovelaceCard> => {
  if (cardHelpers) {
    const cardHelper = await cardHelpers;
    return cardHelper.createCardElement(config);
  }

  const element = document.createElement(tag) as LovelaceCard;

  try {
    element.setConfig(config);
  } catch (err) {
    return await createError(err.message, config);
  }

  return element;
};

@customElement('simple-flexbox-card')
export class SimpleFlexboxCard extends LitElement {
  @property({ attribute: false }) public _hass!: HomeAssistant;
  @internalProperty() private _config!: SimpleFlexboxCardConfig;
  @internalProperty() private _cards: Array<LovelaceCardConfig> = [];
  @internalProperty() private _refCards?: Array<LovelaceCard>;

  public static getStubConfig(): object {
    return {};
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    if (!this._refCards && this._config) {
      this.renderCard();
      return;
    }
    if (this._refCards) {
      this._refCards.forEach((card) => {
        card.hass = hass;
      });
    }
  }

  setConfig(config: SimpleFlexboxCardConfig): void {
    // if (!config?.cards || !Array.isArray(config.cards)) {
    //   throw new Error('Card config incorrect');
    // }

    this._config = config;
    this._cards = config.cards;

    if (this._hass) this.renderCard();
  }

  renderCard(): void {
    if (!this._cards) this._refCards = [];

    const promises = this._cards.map((config, config_i) =>
      this.createCardElement(config, config_i),
    );
    Promise.all(promises).then((cards) => (this._refCards = cards));
  }

  async createCardElement(
    cardConfig: LovelaceCardConfig,
    index: number,
  ): Promise<LovelaceCard> {
    let tag = cardConfig.type;

    if (tag.startsWith('divider')) {
      tag = `hui-divider-row`;
    } else if (tag.startsWith('custom:')) {
      tag = tag.substr('custom:'.length);
    } else {
      tag = `hui-${tag}-card`;
    }

    const element = await createCardFromHelper(tag, cardConfig);

    element.hass = this._hass;

    element.addEventListener(
      'll-rebuild',
      (ev) => {
        ev.stopPropagation();
        this.createCardElement(cardConfig, index).then((card) => {
          (this._refCards as Array<LovelaceCard>)[index] = card;
        });
      },
      { once: true },
    );

    return element;
  }

  render() {
    if (!this._config || !this._hass) {
      return html``;
    }

    return html`<ul
      class="flex-container"
      style="margin-bottom: ${this._config.margin_bottom || '20px'};"
    >
      ${[this._refCards || []].map((card) => html`<li>${card}</li>`)}
    </ul>`;
  }

  static get styles() {
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

  getCardSize() {
    return 3;
  }
}
