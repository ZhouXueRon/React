import React, { PureComponent } from 'react';
import './style.css';

/**
 * 该组件用于监听鼠标的变化
 */
export default class MouseListener extends PureComponent {
    state = {
        x: 0,
        y: 0
    }

    divRef = React.createRef();

    handleMouseMove = e => {
        // 更新x和y的值
        const { left, top } = this.divRef.current.getBoundingClientRect();
        this.setState({
            x: e.clientX - left,
            y: e.clientY - top
        })
    }

    render() {
        return (
            <div
                ref={this.divRef}
                className='point'
                onMouseMove={this.handleMouseMove}
            >
                {this.props.render(this.state)}
            </div>
        )
    }
}
