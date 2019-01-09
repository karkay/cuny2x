import React from 'react';

class Results extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
		//bind funcs here
	}

	render(){
		var results = this.props.data.map((item) =>
			<li className="item" key = {item}>{item}
			</li>


		);
		console.log(results);
		//compare prev states using componentdidupdate
		// if(results.length !== 0){	
		// 	this.setState({
		// 		hasResults: true
		// 	});
		// }
		console.log(results);
		console.log(this.props.data);
		return(
			<div className = "results">
				{this.props.hasResults && results ? results : "nothing there :("}


			</div>


		);

	}
}

export default Results;