export function priceFormat(input: number) {
  return new Intl.NumberFormat("es-CO").format(input);
}
