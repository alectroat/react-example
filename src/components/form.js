import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            mycar: 'Volvo',
            errormessage: ''
        };
    }
    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
            if (val != "" && !Number(val)) {
                err = <strong>Your age must be a number</strong>;
            }
        }
        this.setState({ errormessage: err });
        this.setState({ [nam]: val });
    }
    mySubmitHandler(event) {
        event.preventDefault();
        this.myTask();
        console.log(this.state);
    }
    clearInput() {
        this.setState({ username: '' });
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }
    myTask() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler.bind(this)}>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input ref="myInput"
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.myChangeHandler.bind(this)}
                />
                <p>Enter your age:</p>
                <input
                    type='text'
                    name='age'
                    onChange={this.myChangeHandler.bind(this)}
                />
                {this.state.errormessage}
                <p>
                    <select name='mycar' value={this.state.mycar} onChange={this.myChangeHandler.bind(this)}>
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                </p>                
                <p>
                <input
                    type='submit'
                />
                </p>
                <p><button onClick={this.clearInput.bind(this)}>CLEAR</button></p>
                <div id="myDiv">NODE</div>
                
            </form>
        );
    }
}
export default Form