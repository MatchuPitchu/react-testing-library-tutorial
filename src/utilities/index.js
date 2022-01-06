// helper fn to format number as currency
export const formatCurrency = (amount) => {
  // Intl.NumberFormat object enables language-sensitive number formatting.
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(amount);
};
