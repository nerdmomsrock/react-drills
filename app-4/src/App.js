import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
        userName: '',
        password: '',
    }
  }

  name = (val) => {
    this.setState({userName: val})
  }

  password = (val) => {
    this.setState({password: val})
  }

  click = (e) => {
    alert(`Username: ${this.state.userName}` + ' ' + `Password: ${this.state.password}`)
  }
  render() {
    return (
      <div className='App'>
        <input placeholder='User Name' onChange={(e) => this.name(e.target.value)}/>
        <input placeholder='Password' onChange={(e) => this.password(e.target.value)}/>
        <button onClick={this.click}>Login</button>
      </div>
    )
  }
}

export default App;
