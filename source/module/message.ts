//


export type Locale = string;
export type LocalizationMessages = Record<Locale, Record<string, string>>;

export function mergeLocalizationMessages(messageInventories: Array<LocalizationMessages>): LocalizationMessages {
  const locales = getLocales(messageInventories);
  const mergedMessageEntries = locales.map((locale) => {
    const mergedMessages = messageInventories.map((messages) => messages[locale] ?? {}).reduce(Object.assign, {});
    return [locale, mergedMessages] as const;
  });
  const mergedMessages = Object.fromEntries(mergedMessageEntries);
  return mergedMessages;
};

function getLocales(messageInventories: Array<LocalizationMessages>): Array<Locale> {
  const locales = messageInventories.flatMap((messages) => Object.keys(messages));
  const uniqueLocales = new Set(locales);
  return Array.from(uniqueLocales);
}