import React from 'react';
import Results from './Results';
import axios from 'axios';

const searchStyling = {
	margin: "30px",
	borderRadius: "5px",
}

class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			query: "",
			results: [],
			hasResults: true

		}
		//bind funcs here
	}

	
	onChangeHandler = () =>{
		
		//console.log(document.getElementById("queryField").value);
		var usersQuery = document.getElementById("queryField").value.toUpperCase();
		console.log(typeof(usersQuery));
		const url = "http://ctp-zip-api.herokuapp.com/city/";
		const urlzip = "http://ctp-zip-api.herokuapp.com/zip/";
		const finalURL = url + usersQuery;
		console.log(finalURL);

		axios.get(finalURL)
		  .then(response => {
		  	console.log(response);
		  	//console.log(response.data);
		  	var result = response.data;
		  	//console.log(this.state.results);

		  	
		  	this.setState({results: result,
		  		hasResults: true
		  	});


		  })
		  .catch(err => {
		  	console.log(err);
		  	this.setState({
		  		hasResults: false
		  	});
		  });

	}

	render(){

		return(
			<div className = "searchbar">
					
 				 <input type= "text" onChange={this.onChangeHandler} id = "queryField" placeholder = "city name e.g NYC" style={searchStyling}/>
				<Results data = {this.state.results} hasResults={this.state.hasResults}/>

			</div>

		);

	}
}

export default Search;