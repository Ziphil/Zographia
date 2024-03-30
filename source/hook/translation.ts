//

import dayjs, {Dayjs} from "dayjs";
import {ReactNode, useCallback, useMemo} from "react";
import {Primitive} from "ts-essentials";
import {useIntl} from "/source/hook/locale";


export function useTrans(scope?: string): TransCallbacks {
  const intl = useIntl();
  const trans = useCallback(function (subId: string, values?: any): any {
    const id = (subId.charAt(0) === ":") ? subId.slice(1) : ((scope !== undefined) ? `${scope}.` : "") + subId;
    const defaultMessage = values?.defaultMessage ?? `[${id}]`;
    const rawMessage = intl.formatMessage({id, defaultMessage}, values);
    const message = (rawMessage === "<empty>") ? "" : rawMessage;
    return message;
  }, [intl, scope]);
  const transDate = useCallback(function (date: Dayjs | Date | string | number | null | undefined, style?: "datetime" | "date" | "shortDate" | "time"): string {
    if (date !== null && date !== undefined) {
      const format = intl.formatMessage({id: `common.dateFormat.${style ?? "datetime"}`});
      const locale = intl.locale;
      return dayjs(date).locale(locale).format(format);
    } else {
      return intl.formatMessage({id: "common.dateUndefined"});
    }
  }, [intl]);
  const transNumber = useCallback(function (number: number | null | undefined, digit?: number): string {
    const options = {minimumFractionDigits: digit, maximumFractionDigits: digit};
    if (number !== null && number !== undefined) {
      return intl.formatNumber(number, options);
    } else {
      return intl.formatMessage({id: "common.numberUndefined"});
    }
  }, [intl]);
  return useMemo(() => ({
    trans,
    transNode: trans,
    transDate,
    transNumber
  }), [
    trans,
    transDate,
    transNumber
  ]);
}

type TransCallback = {
  (id: string, values?: Record<string, Primitive | ((parts: Array<string>) => string)>): string,
  (id: string, values?: Record<string, Primitive | ReactNode | ((parts: Array<ReactNode>) => ReactNode)>): ReactNode
};
type TransCallbacks = {
  trans: TransCallback,
  transNode: (id: string, values?: Record<string, ReactNode | ((parts: Array<ReactNode>) => ReactNode)>) => ReactNode,
  transDate: (date: Dayjs | Date | string | number | null | undefined, style?: "datetime" | "date" | "shortDate" | "time") => string,
  transNumber: (number: number | null | undefined, digit?: number) => string
};