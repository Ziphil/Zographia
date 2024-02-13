//

import {ReactElement, ReactNode, useEffect, useMemo, useState} from "react";
import {RootContextProvider} from "/source/component/atom/root/root-context";
import {AlertGlobalProvider} from "/source/component/compound/alert/alert-global-context";
import {ToastGlobalProvider} from "/source/component/compound/toast/toast-global-context";
import {create} from "/source/component/create";
import {Locale, MessageInventory, useDefaultLocale, useSetMessageInventory} from "/source/hook/locale";
import {useDefaultTheme} from "/source/hook/theme";
import {ColorDefinitions, Device, StyleDefinitions} from "/source/module";


export const InnerRoot = create(
  null, "InnerRoot",
  function ({
    messageInventory,
    device,
    colorDefinitions,
    styleDefinitions,
    initialLocale,
    initialTheme,
    children
  }: {
    messageInventory: MessageInventory,
    device: Device,
    colorDefinitions: ColorDefinitions,
    styleDefinitions: StyleDefinitions,
    initialLocale: Locale,
    initialTheme: string,
    children: ReactNode
  }): ReactElement {

    const [ready, setReady] = useState(false);

    const setMessageInventory = useSetMessageInventory();
    useDefaultTheme(initialTheme);
    useDefaultLocale(initialLocale);

    useEffect(() => {
      setMessageInventory(messageInventory);
      setReady(true);
    }, [messageInventory, setMessageInventory]);

    useEffect(() => {
      document.documentElement.setAttribute("data-device", device);
    }, [device]);

    return (
      <RootContextProvider value={useMemo(() => ({device, colorDefinitions, styleDefinitions}), [device, colorDefinitions, styleDefinitions])}>
        {(ready) && (
          <ToastGlobalProvider>
            <AlertGlobalProvider>
              {children}
            </AlertGlobalProvider>
          </ToastGlobalProvider>
        )}
      </RootContextProvider>
    );

  }
);