const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const products = prices.map((price) => price / 2);

const reformat = prices.map(elem => (
  {
    price: elem,
    salePrice: elem / 2
  }
));
console.log('Price object:', reformat);

const roundedPrices = prices.map((e) => e.toFixed(2));
const priceFormated = roundedPrices.map((e) => '$' + e.toString());
console.log('Formatted Prices:', priceFormated);
