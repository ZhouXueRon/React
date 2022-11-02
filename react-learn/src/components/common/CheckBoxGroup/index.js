import React, { Component } from 'react';
import PropTypes from 'prop-types';
import types from '../../../utils/commonTypes';

/**
 * 一组多选框
 */
export default class CheckBoxGroup extends Component {

    /**
     * 默认属性值
     */
    static defaultProps = {
        datas: [],
        chooseDatas: []
    }

    static propTypes = {
        datas: types.groupDatas.isRequired,
        name: PropTypes.string.isRequired,
        chooseDatas: types.chooseDatas,
        onChange: PropTypes.func
    }

    handleChange = e => {
        let newArr;
        if (e.target.checked) {
            newArr = [...this.props.chooseDatas, e.target.value];
        } else {
            newArr = this.props.chooseDatas.filter(it => it !== e.target.value);
        }
        this.props.onChange && this.props.onChange(newArr, this.props.name, e);
    }

    /**
     * 得到一组多选框
     * @returns 
     */
    getCheckBoxes = () => {
        return this.props.datas.map(it => (
            <label key={it.value}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={it.value}
                    checked={this.props.chooseDatas.includes(it.value)}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }

    render() {
        const checks = this.getCheckBoxes();
        return (
            <div>
                {checks}
            </div>
        )
    }
}
