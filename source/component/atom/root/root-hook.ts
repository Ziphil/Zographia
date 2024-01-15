//

import {useContext} from "react";
import {ResponsiveValue, resolveResponsiveValue} from "/source/module/responsive";
import {rootContext} from "./root-context";


export function useSmartphone(): boolean {
  const {smartphone} = useContext(rootContext);
  return smartphone;
};

export function useResponsiveValue<T extends {}>(value: T | ResponsiveValue<T>): T {
  const smartphone = useSmartphone();
  const resolvedValue = resolveResponsiveValue(value, smartphone);
  return resolvedValue;
};