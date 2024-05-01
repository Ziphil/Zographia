//

import {ReactElement, ReactNode, Ref, useEffect, useMemo, useRef, useState} from "react";
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

    useEffect(() => {
      const element = ref.current;
      console.log({element, clientHeight: element?.clientHeight, scrollHeight: element?.scrollHeight});
      if (element) {
        setNeedTruncation(element.clientHeight + 1 < element.scrollHeight);
      }
    }, [children]);

    return (
      <div styleName="root" {...rest}>
        <TruncateContextProvider value={useMemo(() => ({ref, needTruncation, show, setShow, scrollHeight, setScrollHeight}), [ref, needTruncation, show, setShow, scrollHeight, setScrollHeight])}>
          {children}
        </TruncateContextProvider>
      </div>
    );

  }
);