//

import {ReactElement, ReactNode, Ref, useCallback, useContext} from "react";
import {tabListContext} from "/source/component/compound/tab-list/tab-list-context";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";


export const Tab = createWithRef(
  require("./tab.scss"), "Tab",
  function ({
    value,
    children,
    ...rest
  }: {
    value: string,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    const {value: currentValue, onSet} = useContext(tabListContext);
    const selected = value === currentValue;

    const handleClick = useCallback(function (): void {
      onSet?.(value);
    }, [value, onSet]);

    return (
      <button
        styleName="root"
        role="tab"
        onClick={handleClick}
        {...data({selected})}
        {...aria({selected})}
        {...rest}
      >
        <div styleName="inactive" {...aria({hidden: selected})}>
          {children}
        </div>
        <div styleName="active" {...aria({hidden: !selected})}>
          {children}
        </div>
      </button>
    );

  }
);