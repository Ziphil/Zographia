//


export type Device = "desktop" | "mobile";
export type ResponsiveValue<T> = [desktop: T, mobile: T];

export function toResponsiveValue<T extends {}>(value: T | ResponsiveValue<T>): ResponsiveValue<T> {
  if (Array.isArray(value)) {
    return value;
  } else {
    return [value, value];
  }
};

export function resolveResponsiveValue<T extends {}>(value: T | ResponsiveValue<T>, device: Device): T {
  if (Array.isArray(value)) {
    return value[(device === "desktop") ? 0 : 1];
  } else {
    return value;
  }
};