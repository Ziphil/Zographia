//

import {Fragment, ReactElement, ReactNode, Suspense} from "react";
import {Helmet} from "react-helmet";
import {RecoilRoot} from "recoil";
import {InnerRoot} from "/source/component/atom/root/inner-root";
import {create} from "/source/component/create";
import {MessageInventory} from "/source/hook/locale";
import {ColorDefinitions} from "/source/module/color";
import {getColorVarDefinitionCss, getFontFamilyVarDefinitionCss} from "/source/util/css";


require("./reset.scss");


export const Root = create(
  require("./root.scss"), "Root",
  function ({
    messageInventory = {},
    fontFamilies = {},
    colorDefinitions = {},
    children
  }: {
    messageInventory?: MessageInventory,
    fontFamilies?: {main?: string, monospace?: string},
    colorDefinitions?: ColorDefinitions,
    children: ReactNode
  }): ReactElement {

    return (
      <Fragment>
        <Helmet>
          <style>{getColorVarDefinitionCss(colorDefinitions)}</style>
          <style>{getFontFamilyVarDefinitionCss(fontFamilies)}</style>
        </Helmet>
        <Suspense fallback={<div/>}>
          <RecoilRoot>
            <InnerRoot messageInventory={messageInventory}>
              {children}
            </InnerRoot>
          </RecoilRoot>
        </Suspense>
      </Fragment>
    );

  }
);