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
import {DEFAULT_COLOR_DEFINITIONS, DEFAULT_THEME} from "/source/module";
import {ColorDefinitions} from "/source/module/color";
import {Theme} from "/source/module/theme";
import {getColorDefinitionsVarCss, getThemeVarCss} from "/source/util/css";


require("./reset.scss");
require("simplebar-react/dist/simplebar.min.css");


export const Root = create(
  require("./root.scss"), "Root",
  function ({
    messageInventory = {},
    mobileCondition = "(max-width: 767px)",
    colorDefinitions = {},
    theme = {},
    initialLocale = "ja",
    initialTheme = "light",
    children
  }: {
    messageInventory?: MessageInventory,
    mobileCondition?: string,
    colorDefinitions?: DeepPartial<ColorDefinitions>,
    theme?: DeepPartial<Theme>,
    initialLocale?: Locale,
    initialTheme?: string,
    children: ReactNode
  }): ReactElement {

    const mobile = useMedia(mobileCondition);
    const device = (mobile) ? "mobile" : "desktop";

    const fullColorDefinitions = useMemo(() => merge(DEFAULT_COLOR_DEFINITIONS, colorDefinitions), [colorDefinitions]);
    const fullTheme = useMemo(() => merge(DEFAULT_THEME, theme), [theme]);

    const colorDefinitionVarCss = useMemo(() => getColorDefinitionsVarCss(fullColorDefinitions), [fullColorDefinitions]);
    const themeVarCss = useMemo(() => getThemeVarCss(fullTheme, device), [fullTheme, device]);

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
              theme={fullTheme}
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