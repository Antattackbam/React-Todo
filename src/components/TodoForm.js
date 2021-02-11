import React, {Component} from 'react';


class TodoForm extends Component{
    constructor(){
        super();
        this.state= {
            task: ''
        }
    }
    handleChanges = e => {
    //console.log(e.target.value);
       this.setState({
           task: e.target.value
       })
    }

    submitChange = e => {
        e.preventDefault();
        this.setState({task: ''});
        this.props.addTask(this.state.task);
    }
    render(){
        return (
            <form onSubmit={this.submitChange}>
                <input
                value = "text"
                name = "task"
                value = {this.state.task}
                onChange = {this.handleChanges}
                />
                <button className="taskbutton">Add Task</button>
            </form>
        )
    }

}

export default TodoForm;