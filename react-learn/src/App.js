import React, { Component } from 'react';
import NewLifeCycle from './NewLifeCycle';
// import OldLifeCycle from './OldLifeCycle';

export default class App extends Component {
    state = {
        number: 1
    }


    render() {
        return (
            <div>
                <NewLifeCycle n={this.state.number} />  
                <button onClick={() => {
                    this.setState({number: this.state.number + 1})
                }}>父组件按钮+1</button>
            </div>
        )
    }
}
