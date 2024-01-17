//

import dayjs from "dayjs";
import defaultDayjsLocaleData from "dayjs/locale/en";
import updateLocale from "dayjs/plugin/updateLocale";


export type DateData = {
  weekday: {
    long: Array<string>,
    short?: Array<string>,
    minimal?: Array<string>
  },
  month: {
    long: Array<string>,
    short?: Array<string>
  }
};

export function registerDateFormat(locale: string, data: DateData): void {
  dayjs.locale({
    ...defaultDayjsLocaleData,
    name: locale,
    weekdays: data.weekday.long,
    weekdaysShort: data.weekday.short,
    weekdaysMin: data.weekday.minimal,
    months: data.month.long,
    monthsShort: data.month.short
  });
}

dayjs.extend(updateLocale);