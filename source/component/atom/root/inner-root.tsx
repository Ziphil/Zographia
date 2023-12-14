//

import {Fragment, ReactElement, ReactNode, useEffect} from "react";
import {create} from "/source/component/create";
import {MessageInventory, useDefaultLocale, useSetMessageInventory} from "/source/hook/locale";
import {useDefaultTheme} from "/source/hook/theme";


export const InnerRoot = create(
  null, "InnerRoot",
  function ({
    messageInventory = {},
    children
  }: {
    messageInventory?: MessageInventory,
    children: ReactNode
  }): ReactElement {

    const setMessageInventory = useSetMessageInventory();
    useDefaultTheme("light");
    useDefaultLocale("ja");

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