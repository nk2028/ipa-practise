function getRandomElement(xs) {
  return xs[Math.floor(Math.random() * xs.length)];
}

const vowelList = [
  "i",
  "y",
  "ɨ",
  "ʉ",
  "ɯ",
  "u",
  "ɪ",
  "ʏ",
  "ʊ",
  "e",
  "ø",
  "ɘ",
  "ɵ",
  "ɤ",
  "o",
  "ə",
  "ɛ",
  "œ",
  "ɜ",
  "ɞ",
  "ʌ",
  "ɔ",
  "æ",
  "ɐ",
  "a",
  "ɶ",
  "ɑ",
  "ɒ",
];

const personList = ["JE", "JH", "JW", "PL"];

export function getRandomVowelAndPerson() {
  const vowel = getRandomElement(vowelList);
  const person = getRandomElement(personList);
  const vowelAndPerson = { vowel, person };
  return vowelAndPerson;
}
