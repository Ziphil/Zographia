import qixColor from "color";
import {ColorDefinitions} from "/source/module/color";
import {DEFAULT_COLOR_DEFINITIONS} from "/source/module/color";


export const getColorVarDefinitionCss = (definitions: ColorDefinitions): string => {
  const varCss = [];
  const wholeDefinitions = {...DEFAULT_COLOR_DEFINITIONS, ...definitions};
  for (const [scheme, definition] of Object.entries(wholeDefinitions)) {
    if (typeof definition === "string") {
      varCss.push(`--zp-color-${scheme}: ${qixColor(definition).rgb().array().join(", ")};`);
    } else {
      for (const [level, color] of Object.entries(definition)) {
        varCss.push(`--zp-color-${scheme}-${level}: ${qixColor(color).rgb().array().join(", ")};`);
      }
    }
  }
  const css = `:root {\n${varCss.join("\n")}\n}`;
  return css;
};