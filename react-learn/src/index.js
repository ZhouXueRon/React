import React from 'react';
import ReactDOM from 'react-dom';

// const h1 = (
//     <React.Fragment>
//         <h1>Hello World <span>span元素</span></h1>
//         <p>p元素</p>
//     </React.Fragment>
// )

const a = 123, b = 456;
const obj = { a: 1, b: 2 };
const objReact = <h1>这是一个元素对象</h1>;
const arr = [1, 2, 3, 4, 5];
const lis = new Array(3).fill(0).map((item, i) => (<li key={i}>{i}</li>))

const div = (
    <div>
        {a} * {b} = {a * b}
        <p>
            {/* 以下不会产生任何输出 */}
            {null}
            {undefined}
            {false}
        </p>
        {/* 普通对象无法防止 */}
        {/* <p>{obj}</p> */} 
        {/* React元素对象可以放置 */}
        <div>{objReact}</div>
        <p>{arr}</p>
        <ul>{lis}</ul>
    </div>
)

ReactDOM.render(div, document.getElementById('root'));