import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

function Task(props) {
    console.log('Task Reander');
    return (
        <li
            className={props.isFinish ? 'finish' : ''}
        >{props.name}</li>
    )
}

Task.propTypes = {
    name: PropTypes.string.isRequired, // 任务名称
    isFinish: PropTypes.bool.isRequired // 任务是否完成
}

export default React.memo(Task);

// export default class Task extends PureComponent {

//     static propTypes = {
//         name: PropTypes.string.isRequired, // 任务名称
//         isFinish: PropTypes.bool.isRequired // 任务是否完成
//     }

//     render() {
//         console.log('Task Render');
//         return (
//             <li
//                 className={this.props.isFinish ? 'finish' : ''}
//             >{this.props.name}</li>
//         )
//     }
// }
