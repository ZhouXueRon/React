import React from 'react';
import ReactDOM from 'react-dom';
import src1 from "./assets/1.png";
import src2 from "./assets/2.png";
import src3 from "./assets/3.png";
import "./index.css";

const container = document.getElementById('root');
const srcs = [src1, src2, src3]; // 保存图片路径的数组
let index = 1; // 显示图片的索引
let timer;

/**
 * 根据index的值，显示对应的图片
 */
function render() {
    ReactDOM.render(<img src={srcs[index]} alt="" />, container);
}

/**
 * 启动计时器，每隔一段时间切换图片
 */
function start() {
    stop();
    timer = setInterval(() => {
        index = (index + 1) % 3; // 改变index
        render();
    }, 2000)
}

/**
 * 停止计时器
 */
function stop() {
    clearInterval(timer);
}

container.onmouseenter = () => {
    stop();
}
container.onmouseleave = () => {
    start();
}

render();
start();
