//

import {ReactElement, ReactNode, Ref, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {TruncateContextProvider} from "/source/component/compound/truncate/truncate-context";
import {createWithRef} from "/source/component/create";
import {AdditionalProps} from "/source/module/data";


export const Truncate = createWithRef(
  require("./truncate.scss"), "Truncate",
  function ({
    children,
    ...rest
  }: {
    children: ReactNode,
    className?: string,
    ref: Ref<HTMLDivElement>
  } & AdditionalProps): ReactElement {

    const [needTruncation, setNeedTruncation] = useState(false);
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
        <TruncateContextProvider value={useMemo(() => ({ref, needTruncation, show, scrollHeight, handleClick}), [ref, needTruncation, show, scrollHeight, handleClick])}>
          {children}
        </TruncateContextProvider>
      </div>
    );

  }
);