//

import merge from "lodash-es/merge";
import {Fragment, ReactElement, ReactNode, Suspense, useMemo} from "react";
import {Helmet} from "react-helmet";
import {useMedia} from "react-use";
import {RecoilRoot} from "recoil";
import {DeepPartial} from "ts-essentials";
import {InnerRoot} from "/source/component/atom/root/inner-root";
import {create} from "/source/component/create";
import {Locale, MessageInventory} from "/source/hook/locale";
import {DEFAULT_COLOR_DEFINITIONS, DEFAULT_STYLE_DEFINITIONS} from "/source/module";
import {ColorDefinitions} from "/source/module/color";
import {StyleDefinitions} from "/source/module/style";
import {getColorDefinitionsVarCss, getStyleDefinitionsVarCss} from "/source/util/css";


require("./reset.scss");
require("simplebar-react/dist/simplebar.min.css");


export const Root = create(
  require("./root.scss"), "Root",
  function ({
    messageInventory = {},
    mobileCondition = "(max-width: 767px)",
    colorDefinitions = {},
    styleDefinitions = {},
    initialLocale = "ja",
    initialTheme = "light",
    children
  }: {
    messageInventory?: MessageInventory,
    mobileCondition?: string,
    colorDefinitions?: DeepPartial<ColorDefinitions>,
    styleDefinitions?: DeepPartial<StyleDefinitions>,
    initialLocale?: Locale,
    initialTheme?: string,
    children: ReactNode
  }): ReactElement {

    const mobile = useMedia(mobileCondition);
    const device = (mobile) ? "mobile" : "desktop";

    const fullColorDefinitions = useMemo(() => merge(DEFAULT_COLOR_DEFINITIONS, colorDefinitions), [colorDefinitions]);
    const fullStyleDefinitions = useMemo(() => merge(DEFAULT_STYLE_DEFINITIONS, styleDefinitions), [styleDefinitions]);

    const colorDefinitionVarCss = useMemo(() => getColorDefinitionsVarCss(fullColorDefinitions), [fullColorDefinitions]);
    const themeVarCss = useMemo(() => getStyleDefinitionsVarCss(fullStyleDefinitions, device), [fullStyleDefinitions, device]);

    return (
      <Fragment>
        <Helmet>
          <style>{colorDefinitionVarCss}</style>
          <style>{themeVarCss}</style>
        </Helmet>
        <Suspense fallback={<div>LOADING</div>}>
          <RecoilRoot>
            <InnerRoot
              messageInventory={messageInventory}
              device={device}
              colorDefinitions={fullColorDefinitions}
              styleDefinitions={fullStyleDefinitions}
              initialLocale={initialLocale}
              initialTheme={initialTheme}
            >
              {children}
            </InnerRoot>
          </RecoilRoot>
        </Suspense>
      </Fragment>
    );

  }
);