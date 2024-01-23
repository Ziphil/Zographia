//

import "@formatjs/intl-pluralrules/polyfill-force";


export type PluralCategory = "zero" | "one" | "two" | "few" | "many" | "other";
export type PluralRuleType = "cardinal" | "ordinal";

export type PluralRuleData = {
  categories: Record<PluralRuleType, Array<PluralCategory>>,
  select: (number: number, ordinal: boolean) => PluralCategory
};

export function registerPluralRule(locale: string, data: PluralRuleData): void {
  const polyfill = Intl?.["PluralRules"] as any;
  if (polyfill && typeof polyfill["__addLocaleData"] === "function") {
    polyfill["__addLocaleData"]({
      data: {categories: data.categories, fn: data.select},
      locale
    });
  } else {
    throw new Error("PluralRules polyfill is not loaded");
  }
}