import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
        data: ['tacos', 'pizza', 'hot dogs', 'cake', 'soup'],
    }
  }

  
  render (){
    return (
      <div className='App'>
        <ul>{this.state.data.map((element)=> {
    return <ul>{element}</ul>
  })}</ul>
      </div>
    )
  }
}




export default App;
