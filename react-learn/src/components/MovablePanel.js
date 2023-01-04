import React, { PureComponent } from 'react';
import './style.css'

export default class MovablePanel extends PureComponent {

    state = {
        x: 0,
        y: 0
    }

    divRef = React.createRef();

    handleMouseMove = e => {
        // 更新x和y的值
        const { left, top } = this.divRef.current.getBoundingClientRect();
        this.setState({
            x: e.pageX - left,
            y: e.pageY - top
        })
    }

    render() {
        return (
            <div
                ref={this.divRef}
                className='point'
                onMouseMove={this.handleMouseMove}
            >
                <div style={{
                    width: 100,
                    height: 100,
                    background: '#008c8c',
                    position: 'absolute',
                    left: this.state.x,
                    top: this.state.y
                }}></div>
            </div>
        )
    }
}
