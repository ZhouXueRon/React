import React, { Component } from 'react';

class A extends Component {
    render() {
        return <h1 ref={this.props.ref1}>
            组件A
            <span>{this.props.word}</span>
        </h1>
    }
}

// function A(props, ref) {
//     return <h1 ref={ref}>
//         组件A
//         <span>{props.word}</span>
//     </h1>
// }
// 传递函数组件A，得到一个新的组件NewA
// const NewA = React.forwardRef(A);
const NewA = React.forwardRef((props, ref) => {
    return <A {...props} ref1={ref} />
});

export default class App extends Component {
    ARef = React.createRef();

    componentDidMount = () => {
        console.log(this.ARef); // 通过ref转发后，ref指向了A组件中的h1
    }

    render() {
        return (
            <div>
                <NewA ref={this.ARef} word={'dsfsgs'} />
            </div>
        )
    }
}

