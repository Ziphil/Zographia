//

import {DeepRequired} from "ts-essentials";
import {createColor, createColorDefinition} from "/source/module/color";
import {StyleDefinitions} from "/source/module/style";


export const DEFAULT_COLOR_DEFINITIONS = {
  primary: createColorDefinition("oklch(70% 40% 58)", "oklch(35% 20% 58)"),
  secondary: createColorDefinition("oklch(65% 45% 38)", "oklch(35% 20% 38)"),
  blue: createColorDefinition("oklch(55% 50% 260)", "oklch(35% 20% 260)"),
  red: createColorDefinition("oklch(55% 50% 15)", "oklch(35% 20% 15)"),
  green: createColorDefinition("oklch(60% 35% 150)", "oklch(35% 20% 150)"),
  yellow: createColorDefinition("oklch(75% 40% 110)", "oklch(35% 20% 110)"),
  purple: createColorDefinition("oklch(55% 50% 310)", "oklch(35% 20% 310)"),
  cyan: createColorDefinition("oklch(70% 30% 215)", "oklch(35% 20% 215)"),
  orange: createColorDefinition("oklch(70% 40% 55)", "oklch(35% 20% 55)"),
  gray: createColorDefinition("oklch(65% 2% 58)", "oklch(35% 2% 58)"),
  white: createColor("white"),
  black: createColor("black"),
  textLight: createColor("oklch(22% 5% 58)"),
  textDark: createColor("oklch(99% 2% 58)"),
  backgroundLight: createColor("oklch(99% 0% 58)"),
  stainLight: createColor("oklch(63% 18% 58)"),
  backgroundDark: createColor("oklch(30% 10% 58)"),
  stainDark: createColor("black")
} as const;

export const DEFAULT_STYLE_DEFINITIONS = {
  fontFamily: {
    main: "'Noto Sans Display', 'Noto Sans JP', sans-serif",
    bold: "'Noto Sans Display', 'Noto Sans JP', sans-serif",
    monospace: "'Noto Sans Mono', 'Noto Sans JP', monospace"
  },
  fontSize: ["16px", "14px"],
  pageHorizontalPadding: [`${10 / 4}em`, `${4 / 4}em`]
} as const satisfies DeepRequired<StyleDefinitions>;