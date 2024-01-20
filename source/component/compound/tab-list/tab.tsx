//

import {ComponentType, MouseEvent, ReactElement, ReactNode, Ref, useCallback, useContext} from "react";
import {tabListContext} from "/source/component/compound/tab-list/tab-list-context";
import {createWithRef} from "/source/component/create";
import {AdditionalProps, aria, data} from "/source/module/data";


export const Tab = createWithRef(
  require("./tab.scss"), "Tab",
  function ({
    value,
    is = "button",
    onClick,
    children,
    ...rest
  }: {
    value: string,
    is?: "button" | "a" | ComponentType<any>,
    onClick?: (event: MouseEvent<HTMLElement>) => unknown,
    children?: ReactNode,
    className?: string,
    ref: Ref<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    const Is = is;

    const {value: currentValue, onSet} = useContext(tabListContext);
    const selected = value === currentValue;

    const handleClick = useCallback(function (event: MouseEvent<HTMLElement>): void {
      onClick?.(event);
      onSet?.(value);
    }, [value, onClick, onSet]);

    return (
      <Is
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
      </Is>
    );

  }
);