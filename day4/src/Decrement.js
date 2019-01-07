import React from 'react';
import PropTypes from 'prop-types';



const button_style = {
	margin:"20px",
}

export class Decrement extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			num: props.numba
		}
	}

	 decrement = () =>{
		let original = this.state.num;

		if(original > 0){
			this.setState({num: original-1});
		}else{
			alert("Cannot be less than zero");
		}
	}

	render(){
		return <div className="decrement">
					<button onClick={this.decrement} style={button_style} id ="dec_button">minus</button>
					<h1 id = "count">{this.state.num}</h1>
				</div>
	}
};

Decrement.propTypes = {
	numba: PropTypes.number.isRequired,
}