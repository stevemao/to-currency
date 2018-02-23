module.exports = (number, locale, currencyCode) => number.toLocaleString(locale, { style: 'currency', currency: currencyCode });
