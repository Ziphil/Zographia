//

import {Fragment, ReactElement, ReactNode} from "react";
import {Helmet} from "react-helmet";
import {RecoilRoot} from "recoil";
import {create} from "/source/component/create";
import {ColorDefinitions} from "/source/module/color";
import {getColorVarDefinitionCss, getFontFamilyVarDefinitionCss} from "/source/util/css";


require("./reset.scss");


export const Root = create(
  require("./root.scss"), "Root",
  function ({
    fontFamilies = {},
    colorDefinitions = {},
    children
  }: {
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
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </Fragment>
    );

  }
);