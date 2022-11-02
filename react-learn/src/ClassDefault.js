import React, { Component } from 'react'

export default class ClassDefault extends Component {

    // 属性默认值
    static defaultProps = {
        a: 1,
        b: 2,
        c: 3
    }

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                a:{this.props.a}, b:{this.props.b}, c:{this.props.c}
            </div>
        )
    }
}