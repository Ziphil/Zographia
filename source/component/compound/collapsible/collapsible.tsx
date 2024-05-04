//

import {ReactElement, ReactNode, Ref, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";
import {CollapsibleContextProvider} from "./collapsible-context";


export const Collapsible = createWithRef(
  require("./collapsible.scss"), "Collapsible",
  function ({
    children,
    ...rest
  }: {
    children: ReactNode,
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    const [needTruncation, setNeedTruncation] = useState<boolean | undefined>(undefined);
    const [show, setShow] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(0);

    const ref = useRef<HTMLDivElement>(null);

    const handleClick = useCallback(function (): void {
      const element = ref.current;
      if (element) {
        setScrollHeight(element.scrollHeight);
        setShow((show) => !show);
      }
    }, [ref]);

    const updateInnerSize = useCallback(function (): void {
      const element = ref.current;
      console.log({element, clientHeight: element?.clientHeight, scrollHeight: element?.scrollHeight});
      if (element) {
        setNeedTruncation(element.clientHeight + 8 < element.scrollHeight);
        setScrollHeight(element.scrollHeight);
      }
    }, [ref]);

    useEffect(() => {
      updateInnerSize();
    }, [children, updateInnerSize]);

    return (
      <div styleName="root" {...rest}>
        <CollapsibleContextProvider value={useMemo(() => ({ref, needTruncation, show, scrollHeight, handleClick}), [ref, needTruncation, show, scrollHeight, handleClick])}>
          {children}
        </CollapsibleContextProvider>
      </div>
    );

  }
);