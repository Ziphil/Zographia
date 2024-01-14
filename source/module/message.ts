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