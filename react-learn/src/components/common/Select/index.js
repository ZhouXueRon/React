import React, { Component } from 'react'

/**
 * 下拉框列表
 */
export default class Select extends Component {

    handleChange = e => {
        this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
    }

    /**
     * 得到一组下拉列表
     * @returns 
     */
    getOptions = () => {
        return this.props.datas.map(it => (
            <option key={it.value} value={it.value}>
                {it.text}
            </option>
        ))
    }

    render() {
        const options = this.getOptions();
        return (
            <select
                name={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
            >
                {options}
            </select>
        )
    }
}
