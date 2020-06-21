export const setup = (): void => {
  document.execCommand("styleWithCSS", false, "true"); // use CSS for bold, italic etc
  document.execCommand("defaultParagraphSeparator", false, "p"); // use CSS for bold, italic etc
};
