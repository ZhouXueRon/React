import React, { Component } from 'react';
import Tick from './Tick';

export default class TickControl extends Component {

    state = {
        isOver: false // 倒计时是否完成
    }

    render() {
        let isStatus = '正在倒计时';
        if (this.state.isOver) {
            isStatus = '倒计时完成';
        }
        return (
            <div>
                <Tick number={10}  onOver={() => {
                    this.setState({ isOver: true })
                }} />
                <h2>{isStatus}</h2>
            </div>
        )
    }
}
