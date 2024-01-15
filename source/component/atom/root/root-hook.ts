//

import {useContext} from "react";
import {Device, ResponsiveValue, resolveResponsiveValue} from "/source/module/responsive";
import {rootContext} from "./root-context";


export function useResponsiveDevice(): Device {
  const {device} = useContext(rootContext);
  return device;
};

export function useResponsiveValue<T extends {}>(value: T | ResponsiveValue<T>): T {
  const device = useResponsiveDevice();
  const resolvedValue = resolveResponsiveValue(value, device);
  return resolvedValue;
};