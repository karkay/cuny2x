import React from 'react';
import Card from './Card'


const cardStyling = {
	border: "10px",
}

class ZipResults extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: []
			


		}
		//bind funcs here
	}

	render(){
		var zipResults = this.props.zipData.map((item) => 
				<Card data = {item}/>
			);
		console.log(zipResults);
		return(
			<div>{zipResults}</div>
		);
		

	}
}

export default ZipResults;