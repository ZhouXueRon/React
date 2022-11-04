import React, { Component } from 'react';
import { A, B } from './components/Comp';
import withLog from './HOC/withLog';
import withLogin from './HOC/withLogin';
let AComp = withLog(A);
let BComp = withLog(B);
BComp = withLogin(BComp);

export default class App extends Component {
    aRef = React.createRef();

    componentDidMount = () => {
        console.log(this.aRef);
    }


    render() {
        return (
            <div>
                <AComp ref={this.aRef} a={1} isLogin />
                <BComp b={1} isLogin />
            </div>
        )
    }

}
