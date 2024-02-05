//

import {Provider as RawToastProvider} from "@radix-ui/react-toast";
import {Dispatch, ReactElement, ReactNode, SetStateAction, createContext, useMemo, useState} from "react";
import {noop} from "ts-essentials";
import {ToastViewport} from "/source/component/compound/toast/toast-viewport";
import {create} from "/source/component/create";
import {useTrans} from "/source/hook";


export type ToastGlobalContextValue = {
  setToastElements: Dispatch<SetStateAction<Array<ReactElement>>>
};

export const toastGlobalContext = createContext<ToastGlobalContextValue>({
  setToastElements: noop
});
export const ToastGlobalContextProvider = toastGlobalContext["Provider"];


export const ToastGlobalProvider = create(
  null, "ToastGlobalProvider",
  function ({
    children
  }: {
    children: ReactNode
  }): ReactElement {

    const {trans} = useTrans("toast");

    const [toastElements, setToastElements] = useState<Array<ReactElement>>([]);

    return (
      <RawToastProvider label={trans("label.provider")}>
        <ToastGlobalContextProvider value={useMemo(() => ({setToastElements}), [setToastElements])}>
          <ToastViewport/>
          {toastElements.map((toastElement) => toastElement)}
          {children}
        </ToastGlobalContextProvider>
      </RawToastProvider>
    );

  }
);