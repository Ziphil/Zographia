//

import {registerPluralRule} from "../register";


registerPluralRule("isv", {
  categories: {
    cardinal: ["one", "few", "other"],
    ordinal: ["other"]
  },
  select: (number: number, ordinal: boolean) => {
    if (!ordinal) {
      const [integerString, decimalString] = String(number).split(".");
      const integer = +integerString;
      const oneDigit = +integerString.slice(-1);
      const twoDigit = +integerString.slice(-2);
      if (!decimalString) {
        if (oneDigit === 1 && twoDigit !== 11) {
          return "one";
        } else if ((oneDigit >= 2 && oneDigit <= 4) && !(twoDigit >= 12 && twoDigit <= 14)) {
          return "few";
        } else {
          return "other";
        }
      } else {
        return "other";
      }
    } else {
      return "other";
    }
  }
});