//

import dayjs from "dayjs";
import {ComponentProps, ReactElement, cloneElement, useCallback, useContext} from "react";
import type {Toast} from "./toast";
import {toastContext} from "./toast-context";


export type DispatchToast = (element: ReactElement) => void;

export function useToast(): DispatchToast {
  const {setToastElements} = useContext(toastContext);
  const dispatchToast = useCallback((element: ReactElement) => {
    const id = dayjs().valueOf().toString() + Math.floor(Math.random() * 100000);
    const addedToastElement = cloneElement<ComponentProps<typeof Toast>>(element, {
      key: id,
      onOpenSet: (open) => {
        if (!open) {
          setTimeout(() => {
            setToastElements((toasts) => toasts.filter((toast) => toast !== addedToastElement));
          }, 100);
        }
      }
    });
    setToastElements((toastElements) => [...toastElements, addedToastElement]);
  }, [setToastElements]);
  return dispatchToast;
};