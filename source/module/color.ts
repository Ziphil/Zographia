/* eslint-disable @typescript-eslint/naming-convention */

import qixColor from "color";
import {DeepPartial} from "ts-essentials";
import type {DEFAULT_COLOR_DEFINITIONS} from "/source/module/default";


type IsLeveled<K extends keyof ColorScheme> = ColorScheme[K] extends Record<ColorLevel, string> ? K : never;
type IsSingle<K extends keyof ColorScheme> = ColorScheme[K] extends Record<ColorLevel, string> ? never : K;
type LeveledColorSchemeBranch<K extends keyof ColorScheme> = K extends IsLeveled<K> ? K : never;
type SingleColorSchemeBranch<K extends keyof ColorScheme> = K extends IsSingle<K> ? K : never;

export type ColorScheme = typeof DEFAULT_COLOR_DEFINITIONS;
export type LeveledColorScheme = LeveledColorSchemeBranch<keyof ColorScheme>;
export type SingleColorScheme = SingleColorSchemeBranch<keyof ColorScheme>;

export type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ColorDefinition = Record<ColorLevel, string>;
export type ColorDefinitions = Record<LeveledColorScheme, ColorDefinition> & Record<SingleColorScheme, string>;
export type PartialColorDefinitions = DeepPartial<ColorDefinitions>;

export function createColorDefinition(colorString: string, setting: Record<"dark" | "light", {mix: number, saturation: number}>): ColorDefinition {
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

export function createColor(colorString: string): string {
  const color = qixColor(colorString);
  if (color.alpha() >= 1) {
    return color.hex();
  } else {
    return color.hexa();
  }
}

export function getLeveledColor(colorDefinitions: ColorDefinitions, scheme: LeveledColorScheme, level: ColorLevel, alpha?: number): string {
  const color = qixColor(colorDefinitions[scheme][level]);
  if (alpha !== undefined) {
    return color.alpha(alpha).hexa();
  } else {
    return color.hex();
  }
}

export function getSingleColor(colorDefinitions: ColorDefinitions, scheme: SingleColorScheme, alpha?: number): string {
  const color = qixColor(colorDefinitions[scheme]);
  if (alpha !== undefined) {
    return color.alpha(alpha).hexa();
  } else {
    return color.hex();
  }
}