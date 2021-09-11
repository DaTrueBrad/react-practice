import React from 'react'
import './App.css';
import {Greet} from './components/greet'
import Welcome from './components/welcome'
import {Hello} from './components/hello'
import Message from './components/message'
import Counter from './components/counter';
import FunctionClick from './FunctionClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <Counter />
      <Greet name='Stronk'/>
      <Welcome />
      <Hello />
      <Message />
    </div>
  );
}

export default App;
