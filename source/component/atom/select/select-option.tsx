//

import {ForwardedRef, MouseEvent, ReactElement, ReactNode, useCallback, useContext} from "react";
import {MenuItem} from "/source/component/compound/menu";
import {createWithRef} from "/source/component/create";
import {LeveledColorScheme} from "/source/module";
import {AdditionalProps} from "/source/module/data";
import {selectContext} from "./select-context";


export const SelectOption = createWithRef(
  null, "SelectOption",
  function <V>({
    value,
    label,
    scheme,
    children,
    ...rest
  }: {
    value: V,
    label: ReactNode,
    scheme?: LeveledColorScheme | null,
    children?: ReactNode,
    className?: string,
    ref: ForwardedRef<HTMLButtonElement>
  } & AdditionalProps): ReactElement {

    const {updateValue} = useContext(selectContext);

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
