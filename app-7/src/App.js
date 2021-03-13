import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor () {
    super();
    this.state = {
        list: [],
        input: '',
        
    }
  }

  handleChange = (val) => {
    this.setState ({input: val})
  }

  addItem = () => {
    
    this.setState ({list: [...this.state.list, this.state.input]});
    
  }
  render () {
    console.log(this.state.list)
    return (
      <div className='App'>
        <h1>My to-do list:</h1>
       <NewTask handleChange={this.handleChange} addItem={this.addItem}/>
       <List newList={this.state.list}/>
      </div>
    )
  }
}

export default App;
