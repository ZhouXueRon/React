import React, { Component } from 'react'
import PropTypes from 'prop-types';
import types from '../../../utils/commonTypes';

/**
 * 一组单选框
 */
export default class RadioBoxGroup extends Component {

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
     * 得到一组单选框
     * @returns 
     */
    getRadioBoxes = () => {
        return this.props.datas.map(it => (
            <label key={it.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={it.value}
                    checked={this.props.value === it.value}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }

    render() {
        const radios = this.getRadioBoxes();
        return (
            <div>
                {radios}
            </div>
        )
    }
}
