//

import {ReactElement, ReactNode, useEffect, useMemo} from "react";
import {RootContextProvider} from "/source/component/atom/root/root-context";
import {ToastProvider} from "/source/component/compound/toast/toast-context";
import {create} from "/source/component/create";
import {Locale, MessageInventory, useDefaultLocale, useSetMessageInventory} from "/source/hook/locale";
import {useDefaultTheme} from "/source/hook/theme";
import {Device} from "/source/module";


export const InnerRoot = create(
  null, "InnerRoot",
  function ({
    messageInventory,
    device,
    initialLocale,
    initialTheme,
    children
  }: {
    messageInventory: MessageInventory,
    device: Device,
    initialLocale: Locale,
    initialTheme: string,
    children: ReactNode
  }): ReactElement {

    const setMessageInventory = useSetMessageInventory();
    useDefaultTheme(initialTheme);
    useDefaultLocale(initialLocale);

    useEffect(() => {
      setMessageInventory(messageInventory);
    }, [messageInventory, setMessageInventory]);

    useEffect(() => {
      document.documentElement.setAttribute("data-device", device);
    }, [device]);

    return (
      <RootContextProvider value={useMemo(() => ({device}), [device])}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </RootContextProvider>
    );

  }
);