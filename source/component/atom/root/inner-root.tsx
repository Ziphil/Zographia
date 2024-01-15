//

import {Provider as RawToastProvider} from "@radix-ui/react-toast";
import {ReactElement, ReactNode, useEffect, useMemo} from "react";
import {RootContextProvider} from "/source/component/atom/root/root-context";
import {ToastViewport} from "/source/component/compound/toast/toast-viewport";
import {create} from "/source/component/create";
import {Locale, MessageInventory, useDefaultLocale, useSetMessageInventory} from "/source/hook/locale";
import {useDefaultTheme} from "/source/hook/theme";


export const InnerRoot = create(
  null, "InnerRoot",
  function ({
    messageInventory,
    smartphone,
    initialLocale,
    initialTheme,
    children
  }: {
    messageInventory: MessageInventory,
    smartphone: boolean,
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
      document.documentElement.setAttribute("data-smartphone", smartphone.toString());
    }, [smartphone]);

    return (
      <RootContextProvider value={useMemo(() => ({smartphone}), [smartphone])}>
        <RawToastProvider>
          <ToastViewport/>
          {children}
        </RawToastProvider>
      </RootContextProvider>
    );

  }
);