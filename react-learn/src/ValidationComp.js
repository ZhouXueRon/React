import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class A { };
export class B extends A { };

export default class ValidationComp extends Component {
    // 先混合属性
    static defaultProps = {
        b: true
    }

    // 再调用相应的函数进行验证
    static propTypes = {
        a: PropTypes.number.isRequired, // a属性必须是一个数字类型（必填）
        b: PropTypes.bool.isRequired,   // b属性必须是一个布尔类型（必填）
        onClick: PropTypes.func,        // onClick必须是一个函数
        c: PropTypes.any,               // c为任意类型 1.可以设置必填 2.方便查阅属性
        d: PropTypes.node.isRequired,   // d为任何可以被渲染的内容，字符串，数字，React元素（必填）
        e: PropTypes.element,           // e必须是一个React元素
        F: PropTypes.elementType,       // f必须是一个组件类型
        g: PropTypes.instanceOf(A),     // g必须是A的实例
        sex: PropTypes.oneOf([1, 2]),   // 属性值必须是数组中的某一项
        h: PropTypes.shape({            // 属性必须满足该对象的要求（只能多不能少）
            name: PropTypes.string.isRequired,
            age: PropTypes.number,
            address: PropTypes.shape({
                province: PropTypes.string,
                city: PropTypes.string
            })
        }),
        /**
         * 自定义属性检查
         * @param {*} props 所有属性
         * @param {*} propName 属性名
         * @param {*} componentName 组件名
         */
        i: (props, propName, componentName) => {
            // 例如：1.必填 2.该属性必须是一个数字，并且取值范围是0~100
            const val = props[propName];
            if (val === undefined || val === null) { // 验证必填
                return new Error(`invalid prop ${propName} in ${componentName}, ${propName} is Required`);
            }
            if (typeof val !== 'number') { // 验证数字
                return new Error(`invalid prop ${propName} in ${componentName}, ${propName} is not a number`);
            }
            if (val < 0 || val > 100) {
                return new Error(`invalid prop ${propName} in ${componentName}, ${propName} must is between 0 and 100`);
            }
        }
    }

    render() {
        const F = this.props.F;
        return (
            <div>
                {this.props.a}
                <div>
                    {this.props.d}
                    <F />
                </div>
            </div>
        )
    }
}
