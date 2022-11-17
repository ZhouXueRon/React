import React, { PureComponent } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

export default class TaskContainer extends PureComponent {

    state = {
        tasks: []
    }

    componentDidMount = () => {
        const ts = new Array(10).fill(0).map((it, k) => ({
            name: `任务${k + 1}`,
            isFinish: Math.random() > 0.5
        }));

        this.setState({
            tasks: ts
        })
    }

    handleAdd = newTask => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }


    render() {
        console.log('TaskContainer Render');
        return (
            <div>
                <AddTask onAdd={this.handleAdd} />
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}
