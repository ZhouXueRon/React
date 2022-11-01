import React, { Component } from 'react'

export default class OldLifeCycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            n: 0
        };
        console.log('一个新的组件诞生了！！！');
    }

    componentWillMount() {
        console.log('componentWillMount', '组件即将被挂载');
    }

    componentDidMount() {
        console.log('componentDidMount', '挂载完成');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', '接受到新的属性值');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 旧的属性 新的属性 旧的状态 新的状态
        console.log(this.props, nextProps, this.state, nextState);
        // 通过对比数据变化来判断是否需要重新渲染
        if(this.props.n === nextProps.n || this.state.n === nextState.n) {
            return false;
        }
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate', '组件即将被重新渲染');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', '组件已完成渲染');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount', '销毁组件时触发');
    }

    render() {
        console.log('render', '渲染，返回的React元素会被挂载到虚拟DOM树中');
        return (
            <div>
                <h1>旧版生命周期组件</h1>
                <h2>属性n: {this.props.n}</h2>
                <h2>状态n: {this.state.n}</h2>
            </div>
        )
    }
}
