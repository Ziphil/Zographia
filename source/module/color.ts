/* eslint-disable @typescript-eslint/naming-convention */

import qixColor from "color";


type IsLeveled<K extends keyof ColorScheme> = ColorScheme[K] extends Record<ColorLevel, string> ? K : never;
type IsUnleveled<K extends keyof ColorScheme> = ColorScheme[K] extends Record<ColorLevel, string> ? never : K;
type LeveledColorSchemeBranch<K extends keyof ColorScheme> = K extends IsLeveled<K> ? K : never;
type UnleveledColorSchemeBranch<K extends keyof ColorScheme> = K extends IsUnleveled<K> ? K : never;

export type ColorScheme = typeof DEFAULT_COLOR_DEFINITIONS;
export type LeveledColorScheme = LeveledColorSchemeBranch<keyof ColorScheme>;
export type UnleveledColorScheme = UnleveledColorSchemeBranch<keyof ColorScheme>;

export type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ColorDefinition = Record<ColorLevel, string>;
export type ColorDefinitions = Partial<Record<LeveledColorScheme, ColorDefinition>> & Partial<Record<UnleveledColorScheme, string>>;

export const createColorDefinition = (colorString: string, setting: Record<"dark" | "light", {mix: number, saturation: number}>): ColorDefinition => {
  const color = qixColor(colorString);

  const blackColor = qixColor("black");
  const whiteColor = qixColor("white");

  return {
    9: color.saturate(setting.dark.saturation * 4 / 4).mix(blackColor, setting.dark.mix * 4 / 4).hex(),
    8: color.saturate(setting.dark.saturation * 3 / 4).mix(blackColor, setting.dark.mix * 3 / 4).hex(),
    7: color.saturate(setting.dark.saturation * 2 / 4).mix(blackColor, setting.dark.mix * 2 / 4).hex(),
    6: color.saturate(setting.dark.saturation * 1 / 4).mix(blackColor, setting.dark.mix * 1 / 4).hex(),
    5: color.hex(),
    4: color.saturate(setting.light.saturation * 1 / 5).mix(whiteColor, setting.light.mix * 1 / 5).hex(),
    3: color.saturate(setting.light.saturation * 2 / 5).mix(whiteColor, setting.light.mix * 2 / 5).hex(),
    2: color.saturate(setting.light.saturation * 3 / 5).mix(whiteColor, setting.light.mix * 3 / 5).hex(),
    1: color.saturate(setting.light.saturation * 4 / 5).mix(whiteColor, setting.light.mix * 4 / 5).hex(),
    0: color.saturate(setting.light.saturation * 5 / 5).mix(whiteColor, setting.light.mix * 5 / 5).hex()
  };
};

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
  green: createColorDefinition("hsl(110, 45%, 45%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.95, saturation: 0.3}
  }),
  pink: createColorDefinition("hsl(340, 60%, 60%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.96, saturation: 0.2}
  }),
  yellow: createColorDefinition("hsl(60, 65%, 50%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.93, saturation: 0.1}
  }),
  purple: createColorDefinition("hsl(260, 55%, 57%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.95, saturation: 0.3}
  }),
  orange: createColorDefinition("hsl(30, 75%, 55%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.95, saturation: 0.2}
  }),
  gray: createColorDefinition("hsl(203, 20%, 65%)", {
    dark: {mix: 0.55, saturation: -0.3},
    light: {mix: 0.93, saturation: 0.3}
  }),
  white: qixColor("hsl(203, 0%, 100%)").hex(),
  black: qixColor("hsl(203, 33%, 10%)").hex(),
  whiteText: qixColor("hsl(203, 0%, 87%)").hex(),
  blackText: qixColor("hsl(203, 0%, 27%)").hex(),
  background: qixColor("hsl(203, 20%, 98%)").hex(),
  deepBackground: qixColor("hsl(203, 20%, 96%)").hex()
};