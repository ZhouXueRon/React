import React, { Component } from 'react'

export default class MyClassComp extends Component {
    constructor(props) {
        super();
    }
    
    render() {
        return <h1>这是类组件，数字：{this.props.number}</h1>
    }
}
