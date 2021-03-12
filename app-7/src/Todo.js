import React, {Component} from 'react';

class Todo extends Component {
    render () {
        return (
            <h4>{this.props.todo}</h4>
        )
    }
}

export default Todo