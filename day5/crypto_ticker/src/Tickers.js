import React from 'react';
import Cryptocurrency from "./Cryptocurrency";
import './Tickers.css';
import axios from 'axios';
class Tickers extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	        data: [
	            {
	                id: "bitcoin",
	                name: "Bitcoin",
	                symbol: "BTC",
	                price_usd: "1",
	                percent_change_1h: "0",
	                percent_change_24h: "0",
	                percent_change_7d: "0",
	                last_updated: "0"
	            },
	            {
	                id: "ethereum",
	                name: "Ethereum",
	                symbol: "ETH",
	                price_usd: "1",
	                percent_change_1h: "0",
	                percent_change_24h: "0",
	                percent_change_7d: "0",
	                last_updated: "0"
	            },
	            {
	                id: "litecoin",
	                name: "Litecoin",
	                symbol: "LTC",
	                price_usd: "1",
	                percent_change_1h: "0",
	                percent_change_24h: "0",
	                percent_change_7d: "0",
	                last_updated: "0"
	            }
	        ],
	        
    	};
	}


	fetchCryptoCurrencyData(){
		axios.get("https://api.coinmarketcap.com/v1/ticker/?limit=10")
		  .then(response => {
		  	console.log(response.data);
		  	var wanted = ["bitcoin","ethereum","litecoin"];
		  	var result = response.data;
		  	//var result = response.data.filter(currency => wanted.includes(currency.id));
		  	this.setState({data: result});
		  })
		  .catch(err => console.log(err));
	}

	random_color(){
		return ('#'+(Math.random()*0xFFFFFF<<0).toString(16));
		
	}
	


	componentDidMount(){
		
		this.fetchCryptoCurrencyData();
		this.interval = setInterval(() => this.fetchCryptoCurrencyData(), 20 * 1000);
	}

	render(){
		
		
		var tickers = this.state.data.map((currency) =>
			<Cryptocurrency data={currency} key = {currency.id}/>

		);


		return (
			<div className="tickers-container">
				<ul className="tickers">{tickers}</ul>
				<p>Information updated every minute courtesy of CoinMarketCap.com</p>
			</div>

		);
	}
}

export default Tickers;