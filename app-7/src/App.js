import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor () {
    super();
    this.state = {
        list: [],
        input: '',
        task: [],
    }
  }

  handleChange = (val) => {
    this.setState ({input: val})
  }

  addItem = (val) => {
    const input = this.state.input;
    this.state.list.push(input);
    this.setState ({input: val});
  }
  render () {
    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <input placeholder='New Todo Item' onChange={(e) => this.handleChange(e.target.value)} />
        <button onClick={this.addItem}>Add Item</button>
        {this.state.list.map((element) => {
          return <Todo todo={element}/>
        })}
        
      </div>
    )
  }
}

export default App;
