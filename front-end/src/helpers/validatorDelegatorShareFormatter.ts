export default function validatorDelegatorShareFormatter(
  number: number,
): string[] {
  let [integerPart, decimalPart] = number.toString().split(".");

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  decimalPart = decimalPart ? "," + decimalPart.slice(0, 2) : "";

  return [integerPart, decimalPart];
}
