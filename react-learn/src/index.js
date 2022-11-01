import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './Comp';

ReactDOM.render(
    <Comp>
        <h1>这是我传递过来的内容</h1>
    </Comp>
, document.getElementById('root'));