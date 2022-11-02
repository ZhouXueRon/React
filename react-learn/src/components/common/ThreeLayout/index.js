import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import types from '../../../utils/commonTypes';

/**
 * 默认属性
 */
ThreeLayout.defaultProps = {
    leftWidth: 200,     // 左边栏默认宽度
    rightWidth: 200,    // 右边栏默认宽度
    minWidth: 800,      // 主区域最小宽度
    gap: 0              // 间隙
};

ThreeLayout.protoTypes = {
    leftWidth: PropTypes.number,
    rightWidth: PropTypes.number,
    minWidth: PropTypes.number,
    gap: PropTypes.number,
    children: types.children,
    left: PropTypes.node,
    right: PropTypes.node
};

export default function ThreeLayout(props) {
    return (
        <div
            className='three-layout'
            style={{
                minWidth: props.minWidth
            }}
        >
            <div className='main'>
                {props.children}
            </div>
            <div
                className='aside-left'
                style={{
                    width: props.leftWidth,
                    marginRight: props.gap
                }}
            >
                {props.left}
            </div>
            <div
                className='aside-right'
                style={{
                    width: props.rightWidth,
                    marginLeft: props.gap
                }}
            >
                {props.right}
            </div>
        </div>
    )
}
