import React from 'react';

class Card extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
			


		}
		//bind funcs here
	}

	render(){
		// var results = this.props.data.map((item) =>
		// 	<li className="item" key = {item.RecordNumber}>{item}
		// 	</li>


		// );
		console.log(this.props.data);
		//compare prev states using componentdidupdate
		// if(results.length !== 0){	
		// 	this.setState({
		// 		hasResults: true
		// 	});
		// }
		
		
		return(
			<ul className = "results">
			
				<h3>{this.props.data.City}, {this.props.data.State}</h3>
				<li>State: {this.props.data.State}</li>
				<li>Location: ({this.props.data.Lat}, {this.props.data.Long})</li>
				<li>Estimated Population: {this.props.data.EstimatedPopulation}</li>
				<li>Total Wages: {this.props.data.TotalWages}</li>


			</ul>


		);

	}
}

export default Card;