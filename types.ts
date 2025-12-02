
export interface EraData {
  id: string;
  nameCN: string;
  nameEN: string;
  spacingValue: number; // The representational line-height
  descriptionCN: string;
  descriptionEN: string;
  visualStyle: 'bamboo' | 'paper-fluid' | 'paper-order' | 'woodblock' | 'commercial' | 'modern';
}

export interface GeneratedContent {
  title: string;
  body: string;
  translation: string;
}
