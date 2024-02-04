//

import {DeepRequired} from "ts-essentials";
import {createColor, createColorDefinition} from "/source/module/color";
import {StyleDefinitions} from "/source/module/style";


export const DEFAULT_COLOR_DEFINITIONS = {
  primary: createColorDefinition("hsl(30, 80%, 50%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.91, saturation: 0.3}
  }),
  secondary: createColorDefinition("hsl(15, 80%, 55%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.93, saturation: 0.3}
  }),
  blue: createColorDefinition("hsl(220, 75%, 50%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.93, saturation: 0.3}
  }),
  red: createColorDefinition("hsl(350, 65%, 55%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.94, saturation: 0.3}
  }),
  green: createColorDefinition("hsl(140, 55%, 45%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.93, saturation: 0.3}
  }),
  yellow: createColorDefinition("hsl(60, 70%, 50%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.9, saturation: 0.3}
  }),
  purple: createColorDefinition("hsl(280, 55%, 55%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.94, saturation: 0.3}
  }),
  cyan: createColorDefinition("hsl(190, 70%, 50%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.93, saturation: 0.3}
  }),
  orange: createColorDefinition("hsl(30, 80%, 50%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.91, saturation: 0.3}
  }),
  gray: createColorDefinition("hsl(30, 5%, 55%)", {
    dark: {mix: 0.55, saturation: -0.1},
    light: {mix: 0.92, saturation: 0.2}
  }),
  white: createColor("hsl(30, 100%, 100%)"),
  black: createColor("hsl(30, 0%, 0%)"),
  textLight: createColor("hsl(30, 30%, 10%)"),
  textDark: createColor("hsl(30, 100%, 98%)"),
  backgroundLight: createColor("hsl(30, 30%, 99%)"),
  stainLight: createColor("hsla(30, 30%, 50%)"),
  backgroundDark: createColor("hsl(30, 50%, 15%)"),
  stainDark: createColor("hsla(30, 50%, 0%)")
} as const;

export const DEFAULT_STYLE_DEFINITIONS = {
  fontFamily: {
    main: "'Fira Sans', 'Noto Sans', 'Noto Sans JP', sans-serif",
    bold: "'Fira Sans', 'Noto Sans', 'Noto Sans JP', sans-serif",
    monospace: "'Fira Mono', 'Noto Sans Mono', 'Noto Sans JP', monospace"
  },
  fontSize: ["16px", "14px"],
  pageHorizontalPadding: [`${10 / 4}em`, `${4 / 4}em`]
} as const satisfies DeepRequired<StyleDefinitions>;