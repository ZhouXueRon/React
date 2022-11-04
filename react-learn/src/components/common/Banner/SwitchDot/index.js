import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default class SwitchDot extends Component {

    static propTypes = {
        total: PropTypes.number.isRequired, // 小点数量
        curIndex: PropTypes.number.isRequired, // 当前选中的下标
        onChange: PropTypes.func // 点击切换调用的方法
    }

    render() {
        const spans = new Array(this.props.total).fill(0).map((it, k) => (
            <span
                key={k}
                className={k === this.props.curIndex ? 'active' : ''}
                onClick={() => {
                    this.props.onChange && this.props.onChange(k);
                }}
            ></span>
        ));
        return (
            <div className='dots'>
                {spans}
            </div>
        )
    }
}
