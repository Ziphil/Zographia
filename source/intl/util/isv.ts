//


export function convertInterslavicCyrillicToLatin(string: string): string {
  const table = {} as Record<string, string>;
  table["а"] = "a";
  table["б"] = "b";
  table["в"] = "v";
  table["г"] = "g";
  table["д"] = "d";
  table["җ"] = "ǆ";
  table["е"] = "e";
  table["є"] = "ě";
  table["ж"] = "ž";
  table["з"] = "z";
  table["и"] = "i";
  table["ы"] = "y";
  table["ј"] = "j";
  table["к"] = "k";
  table["л"] = "l";
  table["љ"] = "ǉ";
  table["м"] = "m";
  table["н"] = "n";
  table["њ"] = "ǌ";
  table["о"] = "o";
  table["п"] = "p";
  table["р"] = "r";
  table["с"] = "s";
  table["т"] = "t";
  table["у"] = "u";
  table["ф"] = "f";
  table["х"] = "x";
  table["ц"] = "c";
  table["ч"] = "č";
  table["ш"] = "š";
  table["А"] = "A";
  table["Б"] = "B";
  table["В"] = "V";
  table["Г"] = "G";
  table["Д"] = "D";
  table["Җ"] = "ǅ";
  table["Е"] = "E";
  table["Є"] = "Ě";
  table["Ж"] = "Ž";
  table["З"] = "Z";
  table["И"] = "I";
  table["Ј"] = "J";
  table["К"] = "K";
  table["Л"] = "ǈ";
  table["Љ"] = "L";
  table["М"] = "M";
  table["Н"] = "N";
  table["Њ"] = "ǋ";
  table["О"] = "O";
  table["П"] = "P";
  table["Р"] = "R";
  table["С"] = "S";
  table["Т"] = "T";
  table["У"] = "U";
  table["Ф"] = "F";
  table["Х"] = "X";
  table["Ц"] = "C";
  table["Ч"] = "Č";
  table["Ш"] = "Š";
  const convertedString = string.split("").map((char) => table[char] || char).join("");
  return convertedString;
}