import React from 'react';

/**
 * 高阶组件记录日志
 * @param {*} Comp 传入的组件
 * @returns 新的组件
 */
export default function withLog(Comp) {
    class LogWrapper extends React.Component {

        componentDidMount() {
            console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`);
        }

        componentWillUnmount() {
            console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`)
        }

        render() {
            const { forwardRef, ...reast } = this.props;
            return <Comp ref={forwardRef} {...reast} />
        }
    }
    return React.forwardRef((props, ref) => {
        return <LogWrapper {...props} forwardRef={ref} />
    })
}
