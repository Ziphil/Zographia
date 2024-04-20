//

import {Dispatch, useCallback, useEffect, useRef} from "react";
import {IntlShape, createIntl, createIntlCache} from "react-intl";
import {Loadable, atom, selector, useRecoilValue, useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {AsyncOrSync} from "ts-essentials";
import {BUILTIN_MESSAGE_INVENTORY} from "/source/message";
import {getMessages} from "/source/module/message";


export type Locale = string;
export type Messages = Record<string, string>;
export type MessageInventory = Record<Locale, Messages | (() => AsyncOrSync<Messages>)>;

const localeAtom = atom({key: "locale", default: "ja"});
const messageInventoryAtom = atom({key: "messageInventory", default: {} as MessageInventory});
const intlAtom = selector({
  key: "intl",
  get: async ({get}) => {
    const locale = get(localeAtom);
    const messageInventory = get(messageInventoryAtom);
    const messagesArray = await Promise.all([
      getMessages(BUILTIN_MESSAGE_INVENTORY, locale),
      getMessages(messageInventory, locale)
    ]);
    const messages = messagesArray.reduce(Object.assign, {});
    const intl = createIntl({locale, messages, onError: () => null}, createIntlCache());
    return intl;
  }
});

export function useLocale(): Locale {
  const locale = useRecoilValue(localeAtom);
  return locale;
}

export function useChangeLocale(): Dispatch<Locale> {
  const setLocale = useSetRecoilState(localeAtom);
  const changeLocale = useCallback(function (locale: Locale): void {
    document.documentElement.setAttribute("lang", locale);
    localStorage.setItem("zp-locale", locale);
    setLocale(locale);
  }, [setLocale]);
  return changeLocale;
}

export function useInitializeLocale(initialLocale: Locale): void {
  const changeLocale = useChangeLocale();
  useEffect(() => {
    const locale = localStorage.getItem("zp-locale") ?? initialLocale;
    changeLocale(locale);
  }, [initialLocale, changeLocale]);
}

export function useMessageInventory(): MessageInventory {
  const messageInventory = useRecoilValue(messageInventoryAtom);
  return messageInventory;
}

export function useSetMessageInventory(): Dispatch<MessageInventory> {
  const setMessageInventory = useSetRecoilState(messageInventoryAtom);
  return setMessageInventory;
}

export function useIntl(): IntlShape {
  const intlLoadable = useRecoilValueLoadable(intlAtom);
  const ref = useRef<Loadable<IntlShape>>();
  if (intlLoadable.state === "hasValue") {
    ref.current = intlLoadable;
  }
  if (intlLoadable.state === "loading" && ref.current?.state === "hasValue") {
    return ref.current.contents;
  } else {
    return intlLoadable.getValue();
  }
}