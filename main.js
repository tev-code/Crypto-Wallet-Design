const appDiv = document.getElementById('crypto-container');

async function getCryptoData() {
try {
const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
const data = await response.json();
const cryptoList = data.map((crypto) => {
return `<div>
<img src="${crypto.image}" alt="${crypto.name} logo">
<h3>${crypto.name} (${crypto.symbol.toUpperCase()})</h3>
<p>Price: $${crypto.current_price.toLocaleString()}</p>
<p>Market Cap: $${crypto.market_cap.toLocaleString()}</p>
</div>`;
}).join('');
appDiv.innerHTML = `<h2>Top 20 Cryptocurrencies</h2>${cryptoList}`;
} catch (error) {
console.error(error);
appDiv.innerHTML = '<p>An error occurred while fetching cryptocurrency data. Please try again later.</p>';
}
}

getCryptoData();
