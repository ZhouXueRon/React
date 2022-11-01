import React, { Component } from 'react';
import Modal from './Modal';

export default class Test extends Component {
    state = {
        showModal: false
    }

    showModal = () => {
        this.setState({
            showModal: true
        })
    }

    hideModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div>
                <img src="https://img2.baidu.com/it/u=709220129,2713559708&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=521" alt="" />
                {
                    this.state.showModal ?
                        (<Modal onClose={this.hideModal}>
                            <div style={{ background: '#fff' }}>
                                <h1>里面是蒙层组件内容</h1>
                                <button onClick={() => {
                                    this.setState({
                                        showModal: false
                                    })
                                }}>关闭蒙层</button>
                            </div>
                        </Modal>) :
                        null
                }
                <button onClick={() => {
                    this.setState({
                        showModal: true
                    })
                }}>显示蒙层</button>
            </div>
        )
    }
}
