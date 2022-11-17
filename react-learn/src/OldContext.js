import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildA extends React.Component {

    static contextTypes = {
        a: PropTypes.number,
        onChange: PropTypes.func
    }

    static childContextTypes = {
        a: PropTypes.number,
        c: PropTypes.string
    }

    getChildContext() {
        return {
            a: 789,
            c: 'hello world'
        }
    }

    render() {
        return <div>
            <h1>ChildA</h1>
            <h2>a:{this.context.a}</h2>
            <button onClick={() => {
                this.context.onChange(this.context.a + 2)
            }}>子组件+2</button>
            <ChildB />
        </div>
    }

}

ChildA.contextTypes = {
    a: PropTypes.number,
    onChange: PropTypes.func
}

class ChildB extends React.Component {

    /**
     * 声明需要使用哪些上下文中的数据
     */
    static contextTypes = {
        a: PropTypes.number,
        b: PropTypes.string.isRequired
    }

    constructor(props, context) {
        super(props, context); // 将参数的上下文交个父类处理
        console.log(this.context); // {a: 123, b: 'abc'}
    }

    render() {
        return <p>
            ChildB，来自上下文的数据 a: {this.context.a} b: {this.context.b}
        </p>
    }
}

export default class OldContext extends Component {

    state = {
        a: 123,
        b: 'abc'
    }

    /**
     * 约束上下文中的数据类型
     */
    static childContextTypes = {
        a: PropTypes.number,
        b: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

    /**
     * 得到上下文的数据
     * @returns 
     */
    getChildContext = () => {
        return {
            a: this.state.a,
            b: this.state.b,
            onChange: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }

    render() {
        return (
            <div>
                <ChildA />
                <button onClick={() => {
                    this.setState({
                        a: this.state.a + 1
                    })
                }}>a+1</button>
            </div>
        )
    }
}
