export function caracterTextArea(text) {
  const textSize = 1620 - text?.split('').length;
  return textSize;
}
