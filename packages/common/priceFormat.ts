export function priceFormat(input: number) {
  return new Intl.NumberFormat("de-DE").format(input);
}
