//

import {useId} from "@floating-ui/react";
import {ReactElement, ReactNode} from "react";
import {create} from "/source/component/create";
import {RadioGroupContextProvider} from "./radio-group-context";


export const RadioGroup = create(
  null, "RadioGroup",
  function ({
    value,
    onSet,
    children
  }: {
    value?: string | null,
    onSet?: (value: string) => unknown,
    children: ReactNode
  }): ReactElement {

    const name = useId();

    return (
      <RadioGroupContextProvider value={{name, value, onSet}}>
        {children}
      </RadioGroupContextProvider>
    );

  }
);