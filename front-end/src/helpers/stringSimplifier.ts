export default function stringSimplifier(
  text: string,
  len: number = 5,
): string {
  if (text.length <= len * 2) {
    return text;
  }
  const startText = text.slice(0, len);
  const endText = text.slice(-len);

  return `${startText}.....${endText}`;
}
