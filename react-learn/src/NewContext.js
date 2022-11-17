import React, { Component } from 'react';

const ctx = React.createContext();
const ctxA = React.createContext();

function ChildA(props) {
    return (
        <ctxA.Provider value={{ aa: 789, ac: 'hello' }}>
            <h1>ChildA</h1>
            <h2>
                <ctx.Consumer>
                    {value => (
                        <div>{value.a}, {value.b}</div>
                    )}
                </ctx.Consumer>
            </h2>
            <ChildB />
        </ctxA.Provider>
    )
}

class ChildB extends React.Component {

    static contextType = ctx;

    render() {
        return (
            <p>
                <ctxA.Consumer>
                    {value => (
                        <>
                            ChildB，来自上下文的数据：aa: {value.aa}, ab: {value.ac}
                        </>
                    )}
                </ctxA.Consumer>
                <ctx.Consumer>
                    {value => (
                        <div>
                            在类组件中使用Consumer:{value.a}, {value.b}
                            <button onClick={() => {
                                value.changeA(value.a + 3)
                            }}>后代组件按钮，a+3</button>
                        </div>

                    )}
                </ctx.Consumer>
                <button onClick={() => {
                    this.context.changeA(this.context.a + 2)
                }}>后代组件按钮，a+2</button>
            </p>
        )
    }
}



export default class NewContext extends Component {

    state = {
        a: 0,
        b: 'abc',
        changeA: newA => {
            this.setState({
                a: newA
            })
        }
    }

    render() {
        return (
            <ctx.Provider value={this.state}>
                <div>
                    <ChildA />
                    <button onClick={() => {
                        this.setState({
                            a: this.state.a + 1
                        })
                    }}>父组件的按钮，a+1</button>
                </div>
            </ctx.Provider>
        )
    }
}
