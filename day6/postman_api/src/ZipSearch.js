import React from 'react';
import ZipResults from './ZipResults';
import axios from 'axios';

const searchStyling = {
	margin: "30px",
	borderRadius: "5px",
}

class ZipSearch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			query: "",
			results: []

		}
		//bind funcs here
	}
	onChangeHandler = () =>{
		
		//console.log(document.getElementById("queryField").value);
		var usersQuery = document.getElementById("queryFieldZip").value;
		console.log(usersQuery);
		
		//const url = "http://ctp-zip-api.herokuapp.com/city/";
		const urlzip = "http://ctp-zip-api.herokuapp.com/zip/";
		const finalURL = urlzip + usersQuery;
		console.log(finalURL);

		axios.get(finalURL)
		  .then(response => {
		  	console.log(response);
		  	//console.log(response.data);
		  	var result = response.data;
		  	console.log(result);
		  	//console.log(this.state.results);
		  	
		  	this.setState({results: result});
		  })
		  .catch(err => console.log(err));

	}

	render(){

		return(
			<div className = "searchbar">
	
 				 <input type= "text" onChange={this.onChangeHandler} id = "queryFieldZip" placeholder = "zip code e.g 10001" style={searchStyling}/>
				<ZipResults zipData = {this.state.results}/>

			</div>

		);

	}
}

export default ZipSearch;