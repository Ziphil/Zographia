//

import {Fragment, ReactElement, ReactNode, Suspense, useMemo} from "react";
import {Helmet} from "react-helmet";
import {useMedia} from "react-use";
import {RecoilRoot} from "recoil";
import {InnerRoot} from "/source/component/atom/root/inner-root";
import {create} from "/source/component/create";
import {Locale, MessageInventory} from "/source/hook/locale";
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
    colorDefinitions?: ColorDefinitions,
    theme?: Theme,
    initialLocale?: Locale,
    initialTheme?: string,
    children: ReactNode
  }): ReactElement {

    const mobile = useMedia(mobileCondition);
    const device = (mobile) ? "mobile" : "desktop";

    const colorDefinitionVarCss = useMemo(() => getColorDefinitionsVarCss(colorDefinitions), [colorDefinitions]);
    const themeVarCss = useMemo(() => getThemeVarCss(theme, device), [theme, device]);

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