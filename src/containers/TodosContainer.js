import React from 'react';
import ToDoModel from '../models/Todo';
import CreateTodoForm from '../components/CreateTodoForm';
import TodosRender from '../components/TodosRender';

class TodosContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        ToDoModel.all().then((res) => {
            this.setState({
                todos: res.data.todos,
            });
        });
    };

    createTodo = (todo) => {
        let newTodo = {
            body: todo,
            completed: false,
        };

        ToDoModel.create(newTodo).then((res) => {
            let todos = this.state.todos;
            todos.push(res.data);
            this.setState({ todos: todos });
        });
    };

    deleteTodo = (todo) => {
        ToDoModel.delete(todo).then((res) => {
            let todos = this.state.todos.filter((todo) => {
                return todo._id !== res.data._id;
            });
            this.setState({todos});
        });
    };

    updateTodo = (todo) => {
        const isUpdatedTodo = (t) => {
            return t._id === todo._id;
        };

        ToDoModel.update(todo)
        .then((res) => {
            let todos = this.state.todos;
            todos.find(isUpdatedTodo).body = todo.body;
            this.setState({ todos: todos });
        });
    };

    render () {

        return (
            <div className="todosComponent">
                <CreateTodoForm createTodo={this.createTodo} />
                <TodosRender 
                    todos={this.state.todos} 
                    deleteTodo={this.deleteTodo}
                    updatedTodo={this.updateTodo}
                />
            </div>
        );
    };
};

export default TodosContainer;