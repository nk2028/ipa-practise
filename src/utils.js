export function padZero(str, size) {
  return str.length >= size ? str : "0".repeat(size - str.length) + str;
}

export function playSound(url) {
  return new Promise(function (resolve, reject) {
    var audio = new Audio();
    audio.preload = "auto";
    audio.autoplay = true;
    audio.onerror = reject;
    audio.onended = resolve;
    audio.src = url;
  });
}
