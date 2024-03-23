export function numberFormatter(num: number): string {
  const suffixes: string[] = ["", "K", "M", "B", "T"];
  if (num < 1000) {
    return num.toString();
  } else {
    const exp: number = Math.floor(Math.log10(num) / 3);
    const roundedNum: string = (num / Math.pow(1000, exp)).toFixed(2);
    return `${roundedNum} ${suffixes[exp]}`;
  }
}

export function numberSplitter(number: number): string[] {
  let [integerPart, decimalPart] = number.toString().split(".");

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  decimalPart = decimalPart ? "," + decimalPart.slice(0, 2) : "";

  return [integerPart, decimalPart];
}
