import React from 'react';
import ReactDOM from 'react-dom';
import MyFuncComp from './MyFuncComp';
import MyClassComp from './MyClassComp';

ReactDOM.render(<div>
    <MyFuncComp number={3} />
    <MyClassComp number='3' />
</div>, document.getElementById('root'));

