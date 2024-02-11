//

import qixColor from "color";
import {toKebabCase} from "/source/module/case";
import {ColorDefinitions} from "/source/module/color";
import {Device, resolveResponsiveValue} from "/source/module/responsive";
import {StyleDefinitions} from "/source/module/style";


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

export function getStyleDefinitionsVarCss(definitions: StyleDefinitions, device: Device): string {
  const varCss = [];
  varCss.push(`--glob-font-family-main: ${definitions.fontFamily.main};`);
  varCss.push(`--glob-font-family-bold: ${definitions.fontFamily.bold};`);
  varCss.push(`--glob-font-family-monospace: ${definitions.fontFamily.monospace};`);
  varCss.push(`--glob-font-size: ${resolveResponsiveValue(definitions.fontSize, device)};`);
  varCss.push(`--glob-page-horizontal-padding: ${resolveResponsiveValue(definitions.pageHorizontalPadding, device)};`);
  const css = `:root {\n${varCss.join("\n")}\n}`;
  return css;
}