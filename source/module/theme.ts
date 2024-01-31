//

import {ResponsiveValue} from "/source/module/responsive";


export type Theme = {
  fontSize: string | ResponsiveValue<string>,
  fontFamilies: FontFamilies
};

export type FontFamilies = {
  main: string,
  bold: string,
  monospace: string
};