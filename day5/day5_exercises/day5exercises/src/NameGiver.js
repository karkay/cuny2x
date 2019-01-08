import React from 'react';

class NameGiver extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			firstName: "John",
			lastName:  "Doe",
			isHidden:  	true,
			editHidden: false,
		}
		//this.updateName = this.updateName.bind(this);
	}

	updateName = (e) => {

		console.log(e.target);


	}

	onEdit = (e) => {
		e.preventDefault();
		this.setState({
			isHidden: !this.state.isHidden,
			editHidden: !this.state.editHidden
		});
		
	}
	onSave = (e) => {
		e.preventDefault();

		this.setState({
			firstName: document.getElementById("firstname").value,
			lastName:  document.getElementById("lastname").value,
			isHidden: !this.state.isHidden,
			editHidden: !this.state.editHidden



		});
		
	}

	onCancel = (e) => {
		e.preventDefault();
		this.setState({
			isHidden: !this.state.isHidden,
			editHidden: !this.state.editHidden
		});


	}
	render(){
		return(
			<div className = "nameGiver">
				<div className = "fullName" style={{display: "inline-flex"}}>
					<div className = "first" style = {{margin: "2px"}}>
					{this.state.firstName}
					</div>

					<div className = "first" style = {{margin: "2px"}}>
					{this.state.lastName}
					</div>

					
				</div>
				<br/>
				{!this.state.isHidden && <form>
					<input type="text"  placeholder={this.state.firstName} id ="firstname"/><br/>
					<input type="text"  placeholder={this.state.lastName}  id ="lastname"/><br/>
					<button className ="saveButton" onClick={this.onSave}>save</button>
					<button className ="cancelButton" onClick={this.onCancel}>cancel</button>
				</form>}
				{!this.state.editHidden && <button className = "editButton" onClick={this.onEdit} style={{margin:"10px", fontSize:"15px", borderRadius: "10px", padding: "10px"}}>edit</button>}
			</div>

		);
	}
}

export default NameGiver;