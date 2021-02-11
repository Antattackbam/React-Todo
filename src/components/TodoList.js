import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todolist">
            {props.tasks.map(task => (
                <Todo toggleCompleted={props.toggleCompleted} key={task.id} id={task.id} completed={task.completed} task={task.name} />
            ))}
            <button className="clear-btn"
            onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList;