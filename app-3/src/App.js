import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      userInput: ['bread', 'milk', 'eggs', 'cheese', 'peanut butter'],
      filteredItems: ''
    };
  }

  handleChange = (val) => {
    this.setState ({filteredItems: val})
  }
  render() {
    const filteredInput = this.state.userInput.filter((element) => {
      return element.includes(this.state.filteredItems)
    })
    return (
      <div className='App'>
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        <h2>{filteredInput.map((element) => {
          return <ul>{element}</ul>
        })}</h2>
        
      </div>
    )
  }
}


export default App;
