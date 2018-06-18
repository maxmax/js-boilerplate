// Thumbs (Youtube, Vimeo)

export const thumbYoutube = (str) => {
  return `<article><embed width="420" height="315" style="max-width: 100%;" src="${'https://www.youtube.com/embed/' + str}" /></article>`;
}
