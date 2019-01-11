import React, { Component } from 'react';
import './App.css';
import UserProfile from './UserProfile';
import Home from './Home';
import LogIn from './Login';
import Credits from './Credits';
import Debits from './Debits';
import axios from 'axios';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      accountBalance: 1234.56,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debitData: [],
      creditData: [],
    }

  }

  componentDidMount(){
    axios.get("https://moj-api.herokuapp.com/debits")
      .then(response => {
        
        this.setState({debitData: response.data});
        console.log(this.state.debitData);
      }
      
      ).catch(err =>{
        console.log(err);
    });

    axios.get("https://moj-api.herokuapp.com/credits")
      .then(response => {
        console.log(response.data);
        this.setState({creditData: response.data});
        console.log(this.state.creditData);
      }

      
      ).catch(err =>{
        console.log(err);
    });
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser:newUser})
  }

  addBalance = (amount) => {
    this.setState({
      accountBalance: this.state.accountBalance + amount
    });
  }
  subBalance = (amount) => {
    this.setState({
      accountBalance: this.state.accountBalance - amount
    });
  }

  render() {
      const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
      const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />

      );
      

      const LogInComponent = () => (
        <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>
      )
      const DebitsComponent = () => (
        <Debits data={this.state.debitData} bal={this.state.accountBalance} fun={this.subBalance} />
      )
      const CreditsComponent = () => (
        <Credits data={this.state.creditData} bal={this.state.accountBalance} fun={this.addBalance} />
      )
      console.log(this.state.creditData);

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={
            UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>


          
        </Switch>
      </Router>
    );
  }
}

export default App;
