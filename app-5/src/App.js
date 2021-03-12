import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  
  render () {
    return (
      <div className='App'>
        <Image url={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'}/>
        
      </div>
    )
  }
}

export default App;
