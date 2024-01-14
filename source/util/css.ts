import qixColor from "color";
import {toKebabCase} from "/source/module/case";
import {ColorDefinitions} from "/source/module/color";
import {DEFAULT_COLOR_DEFINITIONS, DEFAULT_FONT_FAMILIES} from "/source/module/default";


export function getColorVarDefinitionCss(definitions: ColorDefinitions): string {
  const varCss = [];
  const wholeDefinitions = {...DEFAULT_COLOR_DEFINITIONS, ...definitions};
  for (const [scheme, definition] of Object.entries(wholeDefinitions)) {
    if (typeof definition === "string") {
      const colorObject = qixColor(definition);
      const colorArray = colorObject.rgb().array();
      varCss.push(`--glob-color-${toKebabCase(scheme)}: ${colorArray.join(", ")};`);
    } else {
      for (const [level, color] of Object.entries(definition)) {
        const colorObject = qixColor(color);
        const colorArray = colorObject.rgb().array();
        varCss.push(`--glob-color-${toKebabCase(scheme)}-${level}: ${colorArray.join(", ")};`);
      }
    }
  }
  const css = `:root {\n${varCss.join("\n")}\n}`;
  return css;
};

export function getFontFamilyVarDefinitionCss(fontFamilies: {main?: string, bold?: string, monospace?: string}): string {
  const varCss = [];
  varCss.push(`--glob-font-family-main: ${fontFamilies.main ?? DEFAULT_FONT_FAMILIES.main};`);
  varCss.push(`--glob-font-family-bold: ${fontFamilies.bold ?? DEFAULT_FONT_FAMILIES.bold};`);
  varCss.push(`--glob-font-family-monospace: ${fontFamilies.monospace ?? DEFAULT_FONT_FAMILIES.monospace};`);
  const css = `:root {\n${varCss.join("\n")}\n}`;
  return css;
}