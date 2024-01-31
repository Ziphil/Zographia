//

import qixColor from "color";
import {toKebabCase} from "/source/module/case";
import {ColorDefinitions} from "/source/module/color";
import {Device, resolveResponsiveValue} from "/source/module/responsive";
import {Theme} from "/source/module/theme";


export function getColorDefinitionsVarCss(definitions: ColorDefinitions): string {
  const varCss = [];
  for (const [scheme, definition] of Object.entries(definitions)) {
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

export function getThemeVarCss(theme: Theme, device: Device): string {
  const varCss = [];
  varCss.push(`--glob-font-size: ${resolveResponsiveValue(theme.fontSize, device)};`);
  varCss.push(`--glob-font-family-main: ${theme.fontFamilies.main};`);
  varCss.push(`--glob-font-family-bold: ${theme.fontFamilies.bold};`);
  varCss.push(`--glob-font-family-monospace: ${theme.fontFamilies.monospace};`);
  const css = `:root {\n${varCss.join("\n")}\n}`;
  return css;
}