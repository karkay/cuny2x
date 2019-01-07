import React from 'react';



export class ListContacts extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			contacts: this.props.listOfContacts,
		}
	}

	render(){
		
		//console.log(this.props.listOfContacts);
		return <div className = "container">
			{this.state.contacts.map(contact =>(<ContactCard name = {contact.name} 
													key ={contact.name} 
													mobNum = {contact.mobile}
													workNum = {contact.work}
													email = {contact.email}
													/>))}
		</div>
	}
};

export class ContactCard extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name: props.name,
			mobileNum: props.mobNum,
			workNum: props.workNum,
			email: props.email,
		}

		/*setTimeout(this.defaultInfo.bind(this),1000))*/
	}

	defaultInfo(){
		this.setState({ 
			mobileNum: "555-555-5555",
			workNum: "111-111-1111",
			email: "johndoe23@ecorp.com",
		});
	}

	render(){
		return <div className="container" style = {contactCardStyle}>
			
			<h2>{this.state.name}</h2>
			<h4>Mobile Number: {this.state.mobileNum}</h4>
			<h4>Work Number: {this.state.workNum}</h4>
			<h4>Email: {this.state.email}</h4>
		</div>
	}
};

const contactCardStyle = {
	border: "2px solid #000000",
	margin: "40px",
	borderRadius: "20px",
	padding: "5px",
	textAlign: "center",
	background: "#ffffff",

	

}