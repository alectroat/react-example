import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import Users from './components/users';
import Contact from './components/contact';
import Form from './components/form';
import ToDoList from './components/fetch/todolist';

import Parent from './components/showlist/parent';
import ReduxApp from './components/ReduxApp';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import todoApp from './reducers/reducers'

let store = createStore(todoApp)
let rootElement = document.getElementById('root')

export default class Main extends Component {
    render() {
        return (
            <Router>
            <div>
                <div className="leftMenu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/form">Form</Link>
                        </li>
                        <li>
                            <Link to="/list">List View</Link>
                        </li>
                        <li>
                            <Link to="/redux">Redux</Link>
                        </li>
                        <li>
                            <Link to="/todolist">To Do List</Link>
                        </li>
                    </ul>
                </div>
                <div className="rightMenu">
                    <Route exact path="/" component={App} />
                    <Route path="/users" component={Users} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/form" component={Form} />
                    <Route path="/list" component={Parent} />
                    <Route path="/redux" component={ReduxApp} />
                    <Route path="/todolist" component={ToDoList} />
                </div>
            </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    rootElement
)

//ReactDOM.render(<Main/>, document.getElementById('root'))
