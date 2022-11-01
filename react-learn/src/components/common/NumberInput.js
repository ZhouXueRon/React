import React, { Component } from 'react'

export default class NumberInput extends Component {

    state = {
        val: ''
    }

    onChange = (e) => {
        let val = e.target.value;
        val = val.replace(/\D/g, '');
        this.setState({
            val
        })
    }

    render() {
        return (
            <input
                type='text'
                value={this.state.val}
                onChange={this.onChange}
            />
        )
    }
}
