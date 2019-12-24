import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Item = ({ message }) => (
    <li>{message}</li>
);

export default class ToDoList extends Component
{
    viewData() {
        const todos = ['finish doc', 'submit review', 'wait stackoverflow review'];
        return (
            <ul>
                {todos.map(message => (<Item key={message} message={message} />))}
            </ul >
        );
    }
    render() {
        return (this.viewData());
    }    
}