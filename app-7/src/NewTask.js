import React, {Component} from 'react';

class NewTask extends Component {
    render () {
        return (
            <div>
                <input placeholder='New Todo Item' onChange={(e) => this.props.handleChange(e.target.value)}/>
                <button onClick={this.props.addItem}>Add Item</button>
            </div>
        )
    }
}



export default NewTask