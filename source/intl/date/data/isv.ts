//

import {registerDateFormat} from "../register";


registerDateFormat("isv", {
  weekday: {
    long: "Недєља_Понедєлок_Вторник_Срєда_Четврток_Петок_Субота".split("_")
  },
  month: {
    long: "Јануар_Февруар_Марш_Априљ_Мај_Јуниј_Јулиј_Август_Септембр_Октобр_Новембр_Декембр".split("_"),
    short: "Јан_Фев_Мар_Апр_Мај_Јун_Јул_Авг_Сеп_Окт_Нов_Дек".split("_")
  }
});