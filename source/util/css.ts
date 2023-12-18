import qixColor from "color";
import {toKebabCase} from "/source/module/case";
import {ColorDefinitions} from "/source/module/color";
import {DEFAULT_COLOR_DEFINITIONS, DEFAULT_FONT_FAMILIES} from "/source/module/default";


export function getColorVarDefinitionCss(definitions: ColorDefinitions): string {
  const varCss = [];
  const wholeDefinitions = {...DEFAULT_COLOR_DEFINITIONS, ...definitions};
  for (const [scheme, definition] of Object.entries(wholeDefinitions)) {
    if (typeof definition === "string") {
      varCss.push(`--color-${toKebabCase(scheme)}: ${qixColor(definition).rgb().array().join(", ")};`);
    } else {
      for (const [level, color] of Object.entries(definition)) {
        varCss.push(`--color-${toKebabCase(scheme)}-${level}: ${qixColor(color).rgb().array().join(", ")};`);
      }
    }
  }
  const css = `:root {\n${varCss.join("\n")}\n}`;
  return css;
};

export function getFontFamilyVarDefinitionCss(fontFamilies: {main?: string, monospace?: string}): string {
  const varCss = [];
  varCss.push(`--font-family-main: ${fontFamilies.main ?? DEFAULT_FONT_FAMILIES.main};`);
  varCss.push(`--font-family-monospace: ${fontFamilies.monospace ?? DEFAULT_FONT_FAMILIES.monospace};`);
  const css = `:root {\n${varCss.join("\n")}\n}`;
  return css;
}