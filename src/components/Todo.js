import React from 'react';

const Todo = props => {

    return (
        <div className={`${props.completed ? 'completed': 'task'}`}
        onClick={()=> props.toggleCompleted(props.id)}>
            <p>{props.task}</p>
        </div>
    )
}

export default Todo;