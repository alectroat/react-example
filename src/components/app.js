import React, { Component } from 'react';

class App extends Component {
    //constructor(props) {
    //    super(props);
    //}
    shoot(a,event) {
        alert(a);
    }
    render() {
        return (
            <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
        );
    }
}
export default App