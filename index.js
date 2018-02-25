module.exports = (number, locale, currencyCode) => {
	if (process.env.NODE_ENV === 'development') {
		if (typeof number !== 'number')
		throw Error('First argument must be number')
	}

	return number.toLocaleString(locale, { style: 'currency', currency: currencyCode })
}
