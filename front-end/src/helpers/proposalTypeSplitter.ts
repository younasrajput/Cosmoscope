export default function proposalTypeSplitter(proposalType: string): string {
  const parts: string[] = proposalType.split(".");

  const lastWord: string = parts[parts.length - 1];

  const words: string[] = lastWord.split(/(?=[A-Z])/);

  const capitalizedWords: string[] = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  const formattedType: string = capitalizedWords.join(" ");

  return formattedType;
}
