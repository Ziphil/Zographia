//

import {createColor, createColorDefinition} from "/source/module/color";


export const DEFAULT_COLOR_DEFINITIONS = {
  primary: createColorDefinition("hsl(203, 100%, 38%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.96, saturation: 0.3}
  }),
  secondary: createColorDefinition("hsl(2, 77%, 64%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.96, saturation: 0.3}
  }),
  blue: createColorDefinition("hsl(230, 70%, 55%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.96, saturation: 0.3}
  }),
  red: createColorDefinition("hsl(0, 65%, 60%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.95, saturation: 0.3}
  }),
  gray: createColorDefinition("hsl(203, 20%, 65%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.93, saturation: 0.3}
  }),
  backgroundLight: createColor("hsl(30, 100%, 98%)"),
  backgroundStainLight: createColor("hsl(30, 100%, 95%)")
};

export const DEFAULT_FONT_FAMILIES = {
  main: "'Alegreya Sans', '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック体', 'YuGothic', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', sans-serif",
  monospace: "'Fira Code', monospace"
};