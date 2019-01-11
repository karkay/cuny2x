import React, { Component, PropTypes } from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Credits extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
        	items: []
        };

    }

    componentDidMount(){
        //after it mounts perform axios calls to fetch data and render
        axios.get("https://moj-api.herokuapp.com/credits")
        .then(response => {
        
        this.setState({items: response.data});
        
      }
      
      ).catch(err =>{
        console.log(err);
      });

    }

    onClickHandler = (e) =>{
        e.preventDefault();
        var amount = document.getElementById("amount").value;
        amount = parseFloat(amount);
        this.props.fun(amount);
        console.log("credited!");
        var updatedList = this.state.items;
        updatedList.push({
        	"description": document.getElementById("description").value,
        	"amount": document.getElementById("amount").value,"date": Date.now()
    	});

        this.setState({items: updatedList});
    }

    render() {
    	console.log(this.props.data);
        var results = this.state.items.map(item => 
        	<Card trans={item}/>
        );

        return (
        	<div>
        	  
	          <Link to="/login">Login</Link>
	          <Link to="/">Home</Link>
	          <h2>Balance: {this.props.bal}</h2>
	          <input type="text" id = "amount"></input>
	          <input type="text" id = "description"></input>
	          <button id="creditBtn" onClick={this.onClickHandler}>add credit</button>
            {results}
            </div>
        );
    }
}

export default Credits;
