export function formatToDollar(amount) {
  // convert the parameters to number
  const numberParam = +amount;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numberParam);
}
