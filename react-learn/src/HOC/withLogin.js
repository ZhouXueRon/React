import React from 'react';

/**
 * 控制组件显示状态
 * @param {*} Comp 
 * @returns 
 */
export default function withLogin(Comp) {
    return function LoginWrapper(props) {
        if (props.isLogin) {
            return <Comp />
        }
        return null;
    }
}