import { padZero, playSound } from "./utils";

function generateVowelUrl(vowel, person) {
  const codePoint = padZero(vowel.codePointAt(0).toString(16).toUpperCase(), 4);
  return `http://127.0.0.1:8138/${person}/${codePoint}.mp3`;
}

export function playVowel(vowel, person) {
  const url = generateVowelUrl(vowel, person);
  return playSound(url);
}
