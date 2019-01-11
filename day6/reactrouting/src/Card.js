import React, { Component, PropTypes } from 'react';


class Card extends Component {
    

    constructor(props) {
        super(props);
    }

    render() {
       
        console.log(this.props.trans);
        return (
            <li>Description: {this.props.trans.description}| Amount: {this.props.trans.amount} | Date: {this.props.trans.date}</li>

        );
    }
}

export default Card;
