//

import type {Locale, MessageInventory, Messages} from "/source/hook/locale";


export async function getMessages(messageInventory: MessageInventory, locale: Locale): Promise<Messages> {
  const messages = messageInventory[locale];
  if (messages !== undefined && typeof messages === "function") {
    return await messages();
  } else if (messages !== undefined) {
    return messages;
  } else {
    return {};
  }
}

export function convertMessages(messages: Messages, convert: (message: string) => string): Messages {
  const convertedMessages = Object.fromEntries(Object.entries(messages).map(([key, message]) => [key, convert(message)]));
  return convertedMessages;
}