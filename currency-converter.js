const axios = require('axios');

const getExchangeRate = (fromCurrency,toCurrency) =>{
	axios.get('http://apilayer.net/api/live?access_key=268c2fed9a2e56c9bf97fa07ff916376&format').then((response) =>{
		const rate = response.data.rates;
		console.log(response.data);
	});
}


getExchangeRate('USD','EUR')