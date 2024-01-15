//

import {Provider as RawToastProvider} from "@radix-ui/react-toast";
import {Dispatch, ReactElement, ReactNode, SetStateAction, createContext, useMemo, useState} from "react";
import {noop} from "ts-essentials";
import {ToastViewport} from "/source/component/compound/toast/toast-viewport";
import {create} from "/source/component/create";
import {useTrans} from "/source/hook";


export type ToastContextValue = {
  setToastElements: Dispatch<SetStateAction<Array<ReactElement>>>
};

export const toastContext = createContext<ToastContextValue>({
  setToastElements: noop
});
export const ToastContextProvider = toastContext["Provider"];


export const ToastProvider = create(
  null, "ToastProvider",
  function ({
    children
  }: {
    children: ReactNode
  }): ReactElement {

    const {trans} = useTrans("toast");

    const [toastElements, setToastElements] = useState<Array<ReactElement>>([]);

    return (
      <RawToastProvider label={trans("label.provider")}>
        <ToastContextProvider value={useMemo(() => ({setToastElements}), [setToastElements])}>
          <ToastViewport/>
          {toastElements.map((toastElement) => toastElement)}
          {children}
        </ToastContextProvider>
      </RawToastProvider>
    );

  }
);