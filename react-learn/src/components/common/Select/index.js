import React, { Component } from 'react'
import PropTypes from 'prop-types';
import types from '../../../utils/commonTypes';

/**
 * 下拉框列表
 */
export default class Select extends Component {
    /**
     * 默认属性值
     */
    static defaultProps = {
        datas: [],
        value: ''
    }

    static propTypes = {
        datas: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func
    }

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
