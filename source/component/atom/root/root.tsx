//

import {Fragment, ReactElement, ReactNode, Suspense} from "react";
import {Helmet} from "react-helmet";
import {RecoilRoot} from "recoil";
import {InnerRoot} from "/source/component/atom/root/inner-root";
import {create} from "/source/component/create";
import {Locale, MessageInventory} from "/source/hook/locale";
import {ColorDefinitions} from "/source/module/color";
import {getColorVarDefinitionCss, getFontFamilyVarDefinitionCss} from "/source/util/css";


require("./reset.scss");
require("simplebar-react/dist/simplebar.min.css");


export const Root = create(
  require("./root.scss"), "Root",
  function ({
    messageInventory = {},
    fontFamilies = {},
    colorDefinitions = {},
    initialLocale = "ja",
    initialTheme = "light",
    children
  }: {
    messageInventory?: MessageInventory,
    fontFamilies?: {main?: string, bold?: string, monospace?: string},
    colorDefinitions?: ColorDefinitions,
    initialLocale?: Locale,
    initialTheme?: string,
    children: ReactNode
  }): ReactElement {

    return (
      <Fragment>
        <Helmet>
          <style>{getColorVarDefinitionCss(colorDefinitions)}</style>
          <style>{getFontFamilyVarDefinitionCss(fontFamilies)}</style>
        </Helmet>
        <Suspense fallback={<div>LOADING</div>}>
          <RecoilRoot>
            <InnerRoot messageInventory={messageInventory} initialLocale={initialLocale} initialTheme={initialTheme}>
              {children}
            </InnerRoot>
          </RecoilRoot>
        </Suspense>
      </Fragment>
    );

  }
);