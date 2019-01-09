import React from 'react';

class Results extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: [
			    "10002",
			    "10005",
			    "10006",
			    "10007",
			    "10008",
			    "10009",
			    "10010",
			    "10012",
			    "10013",
			    "10014",
			    "10016",
			    "10017",
			    "10018",
			    "10019",
			    "10020",
			    "10021",
			    "10022",
			    "10023",
			    "10024",
			    "10025",
			    "10026"
			]
			


		}
		//bind funcs here
	}

	render(){
		var results = this.state.data.map((item) =>
			<li className="item" key = "item">{item}
			</li>


		);
		//compare prev states using componentdidupdate
		// if(results.length !== 0){	
		// 	this.setState({
		// 		hasResults: true
		// 	});
		// }
		console.log(results);
		return(
			<div className = "results">
				{data.length && results}


			</div>


		);

	}
}

export default Results;