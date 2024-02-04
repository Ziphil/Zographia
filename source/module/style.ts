//

import {ResponsiveValue} from "/source/module/responsive";


export type StyleDefinitions = {
  fontFamily: FontFamilyStyleDefinition,
  fontSize: string | ResponsiveValue<string>,
  pageHorizontalPadding: string | ResponsiveValue<string>
};

export type FontFamilyStyleDefinition = {
  main: string,
  bold: string,
  monospace: string
};