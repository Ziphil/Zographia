//

import {useMergeRefs} from "@floating-ui/react";
import {CSSProperties, ForwardedRef, MouseEvent, ReactElement, ReactNode, useCallback, useContext} from "react";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module/color";
import {AdditionalProps, aria, data} from "/source/module/data";
import {menuContext} from "./menu-context";


export const MenuItem = createWithRef(
  require("./menu-item.scss"), "MenuItem",
  function ({
    index = 0,
    scheme = null,
    onClick,
    children,
    ref,
    ...rest
  }: {
    index?: number,
    scheme?: LeveledColorScheme | null,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown,
    children?: ReactNode,
    className?: string,
    style?: CSSProperties,
    ref: ForwardedRef<HTMLButtonElement>
  } & AdditionalProps): ReactElement | null {

    const {setOpen, listRef, activeIndex, getItemProps} = useContext(menuContext);
    const mergedRef = useMergeRefs<HTMLButtonElement>([ref, (element) => listRef.current[index] = element]);

    const handleClick = useCallback(function (event: MouseEvent<HTMLButtonElement>): void {
      setOpen(false);
      onClick?.(event);
    }, [setOpen, onClick]);

    return (
      <button
        styleName="root"
        ref={mergedRef}
        role="option"
        {...getItemProps({
          tabIndex: activeIndex === index ? 0 : -1,
          onClick: handleClick
        })}
        {...data({scheme})}
        {...aria({selected: activeIndex === index})}
        {...rest}
      >
        {children}
      </button>
    );

  }
);