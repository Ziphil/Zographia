//

import {createColor, createColorDefinition} from "/source/module/color";


export const DEFAULT_COLOR_DEFINITIONS = {
  primary: createColorDefinition("hsl(30, 70%, 50%)", {
    dark: {mix: 0.6, saturation: -0.3},
    light: {mix: 0.92, saturation: 0.3}
  }),
  secondary: createColorDefinition("hsl(10, 80%, 55%)", {
    dark: {mix: 0.6, saturation: -0.3},
    light: {mix: 0.93, saturation: 0.3}
  }),
  blue: createColorDefinition("hsl(220, 75%, 50%)", {
    dark: {mix: 0.6, saturation: -0.3},
    light: {mix: 0.93, saturation: 0.3}
  }),
  red: createColorDefinition("hsl(0, 75%, 55%)", {
    dark: {mix: 0.6, saturation: -0.3},
    light: {mix: 0.94, saturation: 0.3}
  }),
  gray: createColorDefinition("hsl(30, 5%, 50%)", {
    dark: {mix: 0.6, saturation: -0.3},
    light: {mix: 0.93, saturation: 0.2}
  }),
  textLight: createColor("hsl(30, 30%, 10%)"),
  textDark: createColor("hsl(30, 100%, 98%)"),
  backgroundLight: createColor("hsl(30, 30%, 98%)"),
  backgroundStainLight: createColor("hsl(30, 30%, 95%)"),
  backgroundDark: createColor("hsl(30, 50%, 15%)"),
  backgroundStainDark: createColor("hsl(30, 50%, 10%)")
};

export const DEFAULT_FONT_FAMILIES = {
  main: "'Alegreya Sans', '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック体', 'YuGothic', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', sans-serif",
  monospace: "'Fira Code', monospace"
};