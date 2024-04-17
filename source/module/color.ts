/* eslint-disable @typescript-eslint/naming-convention */

import Color from "colorjs.io";
import type {DEFAULT_COLOR_DEFINITIONS} from "/source/module/default";


type IsLeveled<K extends keyof ColorScheme> = ColorScheme[K] extends Record<ColorLevel, Color> ? K : never;
type IsSingle<K extends keyof ColorScheme> = ColorScheme[K] extends Record<ColorLevel, Color> ? never : K;
type LeveledColorSchemeBranch<K extends keyof ColorScheme> = K extends IsLeveled<K> ? K : never;
type SingleColorSchemeBranch<K extends keyof ColorScheme> = K extends IsSingle<K> ? K : never;

export type ColorScheme = typeof DEFAULT_COLOR_DEFINITIONS;
export type LeveledColorScheme = LeveledColorSchemeBranch<keyof ColorScheme>;
export type SingleColorScheme = SingleColorSchemeBranch<keyof ColorScheme>;

export type ColorLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type ColorDefinition = Record<ColorLevel, Color>;
export type ColorDefinitions = Record<LeveledColorScheme, ColorDefinition> & Record<SingleColorScheme, Color>;
export type PartialColorDefinitions = Partial<ColorDefinitions>;

export function createColorDefinition(colorString: string, darkColorString: string): ColorDefinition {
  const color = new Color(colorString);
  const lightRange = color.range("white", {space: "oklch"});
  const darkRange = color.range(darkColorString, {space: "oklch"});
  const colorDefinition = {
    9: darkRange(4 / 4),
    8: darkRange(3 / 4),
    7: darkRange(2 / 4),
    6: darkRange(1 / 4),
    5: color,
    4: lightRange(1 / 5.6),
    3: lightRange(2 / 5.6),
    2: lightRange(3 / 5.6),
    1: lightRange(4 / 5.6),
    0: lightRange(5 / 5.6)
  };
  return colorDefinition;
}

export function createColor(colorString: string): Color {
  const color = new Color(colorString);
  return color;
}

export function getLeveledColor(colorDefinitions: ColorDefinitions, scheme: LeveledColorScheme, level: ColorLevel, alpha?: number): Color {
  const color = colorDefinitions[scheme][level].clone();
  if (alpha !== undefined) {
    color.alpha = alpha;
    return color;
  } else {
    return color;
  }
}

export function getSingleColor(colorDefinitions: ColorDefinitions, scheme: SingleColorScheme, alpha?: number): Color {
  const color = colorDefinitions[scheme].clone();
  if (alpha !== undefined) {
    color.alpha = alpha;
    return color;
  } else {
    return color;
  }
}

function ensureInGamut(color: Color): Color {
  return color.inGamut("srgb") ? color : new Color("transparent");
}