import React, { Component } from 'react';

class App extends Component {
    handleClick = () => {
        console.log(11111)
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                11111
            </div>
        )
    }
}

export default App;