//


export type LocalizationMessages = Record<string, Record<string, string>>;

export const mergeLocalizationMessages = (allMessages: Array<LocalizationMessages>): LocalizationMessages => {
  const mergedMessages = {
    ja: allMessages.map((messages) => messages.ja ?? {}).reduce(Object.assign, {}),
    en: allMessages.map((messages) => messages.en ?? {}).reduce(Object.assign, {})
  };
  return mergedMessages;
};