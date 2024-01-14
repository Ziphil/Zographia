//

import {useId} from "@floating-ui/react";
import {ReactElement, ReactNode} from "react";
import {create} from "/source/component/create";
import {RadioGroupContextProvider} from "./radio-group-context";


export const RadioGroup = create(
  null, "RadioGroup",
  function ({
    value,
    name,
    onSet,
    children
  }: {
    value?: string | null,
    name?: string,
    onSet?: (value: string) => unknown,
    children: ReactNode
  }): ReactElement {

    const innerName = useId();
    const actualName = (name !== undefined) ? name : innerName;

    return (
      <RadioGroupContextProvider value={{name: actualName, value, onSet}}>
        {children}
      </RadioGroupContextProvider>
    );

  }
);