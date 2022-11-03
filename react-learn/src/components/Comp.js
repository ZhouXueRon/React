import React, { Component } from 'react';

export default class Comp extends Component {

    handleClick = () => {
        this.txt.focus();
    }

    getRef = el => {
        console.log('函数被调用了', el);
        this.txt = el;
    }

    render() {
        return (
            <div>
                <input ref={this.getRef} type="text" />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
