
import { EraData } from './types';

export const ERAS: EraData[] = [
  {
    id: 'qin-han',
    nameCN: '先秦～秦汉 (Qin & Han)',
    nameEN: 'The Bamboo Era',
    spacingValue: 2.4, // Visual separation is huge because of physical strips
    descriptionCN: '竹简是“竖条”，靠绳子穿起来。每一条竹片上只能写一行。没有现代意义的“行距”，而是“竹片之间的间距就是行距”。视觉上行与行被物理隔开，疏朗而古朴。',
    descriptionEN: 'Bamboo slips were narrow vertical strips bound by cord. Each strip held one line of text. "Line spacing" was actually the physical gap between bamboo slips, creating a naturally wide, separated visual rhythm.',
    visualStyle: 'bamboo'
  },
  {
    id: 'wei-jin',
    nameCN: '魏晋南北朝 (Wei & Jin)',
    nameEN: 'The Age of Scrolls',
    spacingValue: 1.6, // Tighter than bamboo, fluid
    descriptionCN: '纸张成熟，书写开始连续。为适应手卷形制并节省空间，行距开始变窄。此时毛笔与纸的配合更纯熟，笔势连绵，行距随书写者的“气韵”而定，紧致而优雅。',
    descriptionEN: 'Paper replaced bamboo, allowing continuous writing. To fit handscrolls and save space, spacing tightened. The layout was driven by the calligrapher\'s flow (Qi), resulting in a compact yet elegant "fluidity".',
    visualStyle: 'paper-fluid'
  },
  {
    id: 'tang',
    nameCN: '唐代 (Tang Dynasty)',
    nameEN: 'Institutional Order',
    spacingValue: 1.8, // Balanced, regulated
    descriptionCN: '唐代讲究法度。官书与抄经体（如《圣教序》）建立了严格的审美规范。行距均匀、严谨，既不拥挤也不松散，呈现出一种“呼吸感的秩序”。',
    descriptionEN: 'The era of rules and structure. Official documents and sutras established strict aesthetic norms. Spacing became uniform and regulated—neither too tight nor too loose—creating a "breathing order".',
    visualStyle: 'paper-order'
  },
  {
    id: 'song',
    nameCN: '宋代 (Song Dynasty)',
    nameEN: 'Woodblock Precision',
    spacingValue: 1.3, // Very tight, grid-like
    descriptionCN: '雕版印刷的高光时代。为节省昂贵的版材，工匠往往将字排得极紧。版心固定，行距必须规律。这种“机械化”的工整感，形成了宋版书特有的高密度美学。',
    descriptionEN: 'The peak of woodblock printing. To save expensive wood, craftsmen carved characters densely. The fixed layout required rigid regularity, creating the high-density, grid-like aesthetic unique to Song editions.',
    visualStyle: 'woodblock'
  },
  {
    id: 'ming',
    nameCN: '明代 (Ming Dynasty)',
    nameEN: 'Commercial Expansion',
    spacingValue: 1.9, // Getting loose/rough
    descriptionCN: '坊刻书爆炸式增长，字体变粗，刀法虽不如宋精致，但行距开始变松，以容纳粗壮的字形。不同地区的刻工风格迥异，行距呈现出一种“参差”的民间活力。',
    descriptionEN: 'Commercial printing exploded. Characters became bolder. Spacing loosened to accommodate the thicker strokes. Styles varied wildly by region, showing a rough, uneven vitality compared to Song precision.',
    visualStyle: 'commercial'
  },
  {
    id: 'qing',
    nameCN: '清代 (Qing Dynasty)',
    nameEN: 'Aesthetic White Space',
    spacingValue: 2.2, // Loose, airy
    descriptionCN: '清代排印趋向大字。字大，行距自然变宽。无论是宫廷的武英殿本还是民间精刻，都开始讲究“留白”与疏朗，视觉上更为宽绰舒适。',
    descriptionEN: 'Layouts favored larger typefaces, naturally widening the spacing. Both imperial and fine commercial editions emphasized "white space" (Liubai), resulting in a spacious, airy, and comfortable reading experience.',
    visualStyle: 'modern'
  }
];

export const DEFAULT_TEXT = `道可道非常道名可名非常名无名天地之始有名万物之母故常无欲以观其妙常有欲以观其徼此两者同出而异名同谓之玄玄之又玄众妙之门`;

export const INITIAL_GENERATED_CONTENT = {
    title: "道德经 (Tao Te Ching)",
    body: DEFAULT_TEXT,
    translation: "The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name."
};
