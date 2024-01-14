//

import {AriaAttributes} from "react";
import {ToKebabCase, toKebabCase} from "/source/module/case";


export function data<N extends string>(object: DataObject<N>): DataProps<N> {
  const dataEntries = [];
  for (const [name, spec] of Object.entries(object)) {
    const kebabName = toKebabCase(name);
    if (spec !== null && spec !== undefined) {
      if (typeof spec === "string") {
        dataEntries.push([`data-${kebabName}`, spec]);
      } else if (typeof spec === "number") {
        dataEntries.push([`data-${kebabName}`, spec.toString()]);
      } else if (typeof spec === "boolean" && spec) {
        dataEntries.push([`data-${kebabName}`, "true"]);
      }
    }
  }
  const data = Object.fromEntries(dataEntries);
  return data;
}

export function aria<N extends AriaName>(object: AriaObject<N>): AriaProps<N> {
  const dataEntries = [];
  for (const [name, value] of Object.entries(object)) {
    dataEntries.push([`aria-${name}`, value]);
  }
  const data = Object.fromEntries(dataEntries);
  return data;
}

export type DataObject<N extends string> = {[K in N]: string | number | boolean | null | undefined};
export type DataProps<N extends string = string> = {[K in N as `data-${ToKebabCase<K>}`]: string};

export type AriaName = ExtractAriaName<keyof AriaAttributes>;
export type AriaObject<N extends AriaName> = {[K in N]: AriaAttributes[`aria-${K}`]};
export type AriaProps<N extends AriaName = AriaName> = {[K in N as `aria-${K}`]: AriaAttributes[`aria-${K}`]};

export type AdditionalProps = DataProps & {[K in string as `aria-${K}`]: AriaAttributes[keyof AriaAttributes]};

type ExtractAriaName<K extends keyof AriaAttributes> = K extends `aria-${infer N}` ? N : never;