import React, { Component} from 'react';
import Todo from './Todo';

class ListTodos extends Component {
    
    constructor(props) {
        super(props);
    }


    // grabValue = (e) => {
    //     console.log("grabValue call");
    //    return document.getElementById("todo_input").innerHTML;
    // }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onAdd(document.getElementById("todo").value);
    }

    render() {
        console.log(this.props);
    	var todos = this.props.value.map(todo =>
    		<Todo data={todo}/>
    	);
    	console.log("list todo todos", todos);


        return (
        	<div>
            	<p>ListTodos Comp</p>
                <form id="todo_input" onSubmit={this.onSubmitHandler}>
                    <input type="text" id="todo"placeholder="enter todo"/>
                </form>
            	{todos}
            	
            </div>
        );
    }
}

export default ListTodos;
