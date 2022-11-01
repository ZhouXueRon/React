import React, { Component } from 'react';
import NumberInput from './components/common/NumberInput';
import FormTest from './components/common/FormTest';

export default class App extends Component {

    state = {
        val: '123',
        checked: true,
        loves: ['足球', '篮球', '音乐', '其他'],
        chooseLoves: ['篮球', '音乐'],
        selVal: '北京'
    }

    onTypeChange = (e) => {
        this.setState({
            val: e.target.value
        })
    }

    onCheckboxChange = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    render() {
        const checkboxs = this.state.loves.map((it, k) =>
            <label key={k}>
                <input
                    type="checkbox"
                    checked={this.state.chooseLoves.includes(it)}
                    onChange={e => {
                        if (e.target.checked) {
                            this.setState({
                                chooseLoves: [...this.state.chooseLoves, it]
                            })
                        } else {
                            this.setState({
                                chooseLoves: this.state.chooseLoves.filter(l => l !== it)
                            })
                        }
                    }}
                />
                {it}
            </label>
        )
        return (
            <div>
                {/* 默认情况下，它是一个非受控组件 */}
                {/* <input type="text" /> */}
                <input
                    type="text"
                    value={this.state.val}
                    onChange={this.onTypeChange}
                />
                <br />
                <NumberInput />
                <br />
                <input
                    type='checkbox'
                    checked={this.state.checked}
                    onChange={this.onCheckboxChange}
                />
                <br />
                {checkboxs}
                <br />
                <select
                    value={this.state.selVal}
                    onChange={(e) => {
                        this.setState({
                            selVal: e.target.value
                        })
                    }}
                >
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="shenzheng">深圳</option>
                </select>
                <br />
                <FormTest />
            </div>
        )
    }
}

