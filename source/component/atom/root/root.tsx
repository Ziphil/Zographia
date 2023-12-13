//

import {Fragment, ReactElement, ReactNode} from "react";
import {Helmet} from "react-helmet";
import {create} from "/source/component/create";
import {ColorDefinitions} from "/source/module/color";
import {getColorVarDefinitionCss} from "/source/util/color";


export const Root = create(
  require("./root.scss"), "Button",
  function ({
    colorDefinitions = {},
    children
  }: {
    colorDefinitions?: ColorDefinitions,
    children: ReactNode
  }): ReactElement {

    return (
      <Fragment>
        <Helmet>
          <style>{getColorVarDefinitionCss(colorDefinitions)}</style>
        </Helmet>
        {children}
      </Fragment>
    );

  }
);