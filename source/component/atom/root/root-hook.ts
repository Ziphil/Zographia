//

import {useContext} from "react";
import {
  ColorDefinitions,
  ColorLevel,
  LeveledColorScheme,
  SingleColorScheme,
  getLeveledColor,
  getSingleColor
} from "/source/module";
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

export function useColorDefinitions(): ColorDefinitions {
  const {colorDefinitions} = useContext(rootContext);
  return colorDefinitions;
}

export function useLeveledColor(scheme: LeveledColorScheme, level: ColorLevel, alpha?: number): string {
  const {colorDefinitions} = useContext(rootContext);
  const color = getLeveledColor(colorDefinitions, scheme, level, alpha);
  return color;
}

export function useSingleColor(scheme: SingleColorScheme, alpha?: number): string {
  const {colorDefinitions} = useContext(rootContext);
  const color = getSingleColor(colorDefinitions, scheme, alpha);
  return color;
}