import React from 'react';
import Todo from './Todo';

const TodosRender = (props) => {
    let todos = props.todos.map((todo) => {
        return (
            <Todo 
                key={todo._id}
                todo={todo}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
            />
        );
    });

    return (
        <ul>
            {todos}
        </ul>
    );
};

export default TodosRender;