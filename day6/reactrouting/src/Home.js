import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';


class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
          <Link to="/userProfile">User Profile</Link>
          <Link to="/login">Login</Link>
          <Link to="/credits">Credits</Link>
          <Link to="/debits">Debits</Link>
          <Link to="/">Home</Link>

          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;

