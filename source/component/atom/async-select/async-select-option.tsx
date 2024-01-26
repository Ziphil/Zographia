//

import {ComponentProps, ForwardedRef, MouseEvent, ReactElement, ReactNode, useCallback, useContext} from "react";
import {MenuItem} from "/source/component/compound/menu";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module";
import {AdditionalProps} from "/source/module/data";
import {asyncSelectContext} from "./async-select-context";


export const AsyncSelectOption = createWithRef(
  null, "AsyncSelectOption",
  function ({
    scheme,
    children,
    ...restAndInternal
  }: {
    scheme?: LeveledColorScheme | null,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    const {value, ...rest} = restAndInternal as AsyncSelectOptionPropsWithInternal;

    const {updateValue} = useContext(asyncSelectContext);

    const handleClick = useCallback(function (event: MouseEvent<HTMLButtonElement>): void {
      updateValue(value);
    }, [value, updateValue]);

    return (
      <MenuItem styleName="root" scheme={scheme} onClick={handleClick} {...rest}>
        {children}
      </MenuItem>
    );

  }
);


type AsyncSelectOptionPropsWithInternal = Omit<ComponentProps<typeof AsyncSelectOption>, "scheme" | "children"> & {value: any};