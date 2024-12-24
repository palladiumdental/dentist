export function formatNumberWithSeparators(number: number): string {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }

  // Use the toLocaleString method for number formatting
  return number.toLocaleString("en-US");
}
