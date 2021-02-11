import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './style.css';

const tasks = [{
  name: "Wash Dishes",
  id: 1234,
  completed: false
}, {
  name: "Finish Project",
  id: 1235,
  completed: false
}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }



  toggleCompleted = (taskId) => {
    //console.log("toggling", taskId);
    const newTasks = this.state.tasks.map(task => {
      if (taskId === task.id){
        return {
          ...task,
          completed: !task.completed
        }
      }
      else {return task;}
    })
    this.setState({
      ...this.state,
      tasks: newTasks
    })
  }

  addTask = (taskName) =>{
    const newTask = {
      name: taskName,
      id: Date.now(),
      completed: false
    }
  this.setState({
    ...this.state,
    tasks: [...this.state.tasks, newTask]
  })
}

clearCompleted = () => {
  //console.log('clearing');
  this.setState({
    ...this.state,
    tasks: this.state.tasks.filter(task => !task.completed)
  })
}
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Things To Do</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList clearCompleted={this.clearCompleted} toggleCompleted={this.toggleCompleted} tasks={this.state.tasks}/>
        </div>
      </div>
    );
  }
}

export default App;
