import React from 'react';

class Folder extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			folderName: "Home",
			folders: ["file1","file2","file3"],
			isHidden: false,
		}
	}
	handleFolders = (e) => {
		e.preventDefault();
		this.setState({
			isHidden: !this.state.isHidden
		});
	}
	render(){
		var files = this.state.folders.map((file)=>
				<li className = "item" key = {file}>{file}</li>
		);
		return(
			<div className="Folder">{this.state.folderName}<br/>{!this.state.isHidden && files}<br/>
			<button className="toggleFolders" onClick={this.handleFolders}>toggle folders</button>

			</div>


		);
	}
}
export default Folder;