import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'simple-flexbox-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface SimpleFlexboxCardConfig extends LovelaceCardConfig {
  type: string;
  cards: Array<LovelaceCardConfig>
  test_gui?: boolean;
}
