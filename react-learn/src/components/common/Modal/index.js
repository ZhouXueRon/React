import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import types from '../../../utils/commonTypes';

Modal.defaultProps = { // 默认属性
    bg: 'rgba(0, 0, 0, .5)'
};

Modal.protoTypes = {
    children: types.children,
    bg: PropTypes.string,
    onClose: PropTypes.func
}

export default function Modal(props) {
    const handleClick = (e) => {
        if (e.target.className === 'modal') {
            props.onClose();
        }
    }

    return (
        <div
            className='modal'
            style={{
                background: props.bg
            }}
            onClick={handleClick}
        >
            <div className="modal-center">
                {props.children}
            </div>
        </div>
    )
}
