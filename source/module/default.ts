//

import {createColor, createColorDefinition} from "/source/module/color";


export const DEFAULT_COLOR_DEFINITIONS = {
  primary: createColorDefinition("hsl(30, 70%, 50%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.92, saturation: 0.3}
  }),
  secondary: createColorDefinition("hsl(10, 80%, 55%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.93, saturation: 0.3}
  }),
  blue: createColorDefinition("hsl(220, 75%, 50%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.93, saturation: 0.3}
  }),
  red: createColorDefinition("hsl(0, 75%, 55%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.94, saturation: 0.3}
  }),
  gray: createColorDefinition("hsl(30, 5%, 50%)", {
    dark: {mix: 0.5, saturation: -0.1},
    light: {mix: 0.93, saturation: 0.2}
  }),
  white: createColor("hsl(30, 100%, 100%)"),
  black: createColor("hsl(30, 0%, 0%)"),
  textLight: createColor("hsl(30, 30%, 10%)"),
  textDark: createColor("hsl(30, 100%, 98%)"),
  backgroundLight: createColor("hsl(30, 30%, 99%)"),
  stainLight: createColor("hsl(30, 30%, 94%)"),
  backgroundDark: createColor("hsl(30, 50%, 15%)"),
  stainDark: createColor("hsl(30, 50%, 10%)")
};

export const DEFAULT_FONT_FAMILIES = {
  main: "'FiraGO', 'Noto Sans', 'Noto Sans JP', sans-serif",
  bold: "'FiraGO', 'Noto Sans', 'Noto Sans JP', sans-serif",
  monospace: "'Fira Mono', 'Noto Sans Mono', 'Noto Sans JP', monospace"
};