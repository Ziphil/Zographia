//

import {useContext} from "react";
import {radioGroupContext} from "./radio-group-context";


export type UseRadioGroupReturn = {
  value?: string | null
};

export function useRadioGroup(): UseRadioGroupReturn {
  const groupSpec = useContext(radioGroupContext);
  if (groupSpec !== undefined) {
    const {value} = groupSpec;
    return {value};
  } else {
    throw new Error("not inside `RadioGroup`");
  }
};