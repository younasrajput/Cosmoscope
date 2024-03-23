export default function stringSimplifier(
  text: string,
  len: number = 5,
): string {
  const startText = text.slice(0, len);
  const endText = text.slice(-len);

  return `${startText}.....${endText}`;
}
