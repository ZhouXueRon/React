import React from 'react';
import './index.css';

export default function Modal(props) {
    const defaultProps = { // 默认属性
        bg: 'rgba(0, 0, 0, .5)'
    };

    const datas = Object.assign({}, defaultProps, props);

    const handleClick = (e) => {
        if (e.target.className === 'modal') {
            datas.onClose();
        }
    }

    return (
        <div
            className='modal'
            style={{
                background: datas.bg
            }}
            onClick={handleClick}
        >
            <div className="modal-center">
                {datas.children}
            </div>
        </div>
    )
}
