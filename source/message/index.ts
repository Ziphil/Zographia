/* eslint-disable no-useless-computed-key */

import type {MessageInventory} from "/source/hook/locale";
import {convertInterslavicCyrillicToLatin} from "/source/intl/util/isv";
import {convertMessages} from "/source/module";


export const BUILTIN_MESSAGE_INVENTORY = {
  ["ja"]: require("./ja.yml"),
  ["en"]: require("./en.yml"),
  ["eo"]: require("./eo.yml"),
  ["isv-Cyrl"]: require("./isv.yml"),
  ["isv-Latn"]: convertMessages(require("./isv.yml"), convertInterslavicCyrillicToLatin)
} as MessageInventory;
