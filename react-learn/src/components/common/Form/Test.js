import React, { Component } from 'react';
import From from './index';

export default class Test extends Component {
    render() {
        return (
            <From onSubmit={datas => console.log(datas)}>
                <div>
                    账号：<From.Input name='loginId' />
                </div>
                <div>
                    密码：<From.Input name='loginPwd' type='password' />
                </div>
                <div>
                    <From.Button>提交</From.Button>
                </div>
            </From>
        )
    }
}
