import React from 'react';
import { A, B } from './components/Comp';
import withLog from './HOC/withLog';
import withLogin from './HOC/withLogin';
let AComp = withLog(A);
AComp = withLogin(AComp);
let BComp = withLog(B);
BComp = withLogin(BComp);

export default function App() {
    return (
        <div>
            <AComp a={1} isLogin />
            <BComp b={1} isLogin />
        </div>
    )
}
