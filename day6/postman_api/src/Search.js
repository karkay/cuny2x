import React from 'react';
import Results from './Results';


const searchStyling = {
	margin: "30px",
	borderRadius: "5px",
}

class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			query: ""

		}
		//bind funcs here
	}

	render(){

		return(
			<div className = "searchbar">
					
 				 <input type= "text" className = "queryField" placeholder = "zip code e.g 10005" style={searchStyling}/>
				<Results/>

			</div>

		);

	}
}

export default Search;