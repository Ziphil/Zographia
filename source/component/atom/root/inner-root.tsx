//

import {Fragment, ReactElement, ReactNode, useEffect} from "react";
import {create} from "/source/component/create";
import {Locale, MessageInventory, useDefaultLocale, useSetMessageInventory} from "/source/hook/locale";
import {useDefaultTheme} from "/source/hook/theme";


export const InnerRoot = create(
  null, "InnerRoot",
  function ({
    messageInventory,
    initialLocale,
    initialTheme,
    children
  }: {
    messageInventory: MessageInventory,
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

    return (
      <Fragment>
        {children}
      </Fragment>
    );

  }
);