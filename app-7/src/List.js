import React, {Component} from 'react';
import Todo from './Todo';

class List extends Component {
    render () {
        console.log(this.props.newList)
        return (
            <div>
                {this.props.newList.map((element, index) => {
                    return <Todo todo={element} key={index}/>
                })}
            </div>
        )
    }
}

export default List