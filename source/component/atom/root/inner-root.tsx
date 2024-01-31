//

import {ReactElement, ReactNode, useEffect, useMemo, useState} from "react";
import {RootContextProvider} from "/source/component/atom/root/root-context";
import {ToastProvider} from "/source/component/compound/toast/toast-context";
import {create} from "/source/component/create";
import {Locale, MessageInventory, useDefaultLocale, useSetMessageInventory} from "/source/hook/locale";
import {useDefaultTheme} from "/source/hook/theme";
import {ColorDefinitions, Device, Theme} from "/source/module";


export const InnerRoot = create(
  null, "InnerRoot",
  function ({
    messageInventory,
    device,
    colorDefinitions,
    theme,
    initialLocale,
    initialTheme,
    children
  }: {
    messageInventory: MessageInventory,
    device: Device,
    colorDefinitions: ColorDefinitions,
    theme: Theme,
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
      <RootContextProvider value={useMemo(() => ({device, colorDefinitions, theme}), [device, colorDefinitions, theme])}>
        {(ready) && (
          <ToastProvider>
            {children}
          </ToastProvider>
        )}
      </RootContextProvider>
    );

  }
);