//


export type ResponsiveValue<T> = [desktop: T, smartphone: T];

export function toResponsiveValue<T extends {}>(value: T | ResponsiveValue<T>): ResponsiveValue<T> {
  if (Array.isArray(value)) {
    return value;
  } else {
    return [value, value];
  }
};

export function resolveResponsiveValue<T extends {}>(value: T | ResponsiveValue<T>, smartphone: boolean): T {
  if (Array.isArray(value)) {
    return value[(smartphone) ? 1 : 0];
  } else {
    return value;
  }
};