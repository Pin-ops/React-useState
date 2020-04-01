import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterMultiple from './components/HookCounterMultiple';
import HookObject from './components/HookObject';
import HookArray from './components/HookArray';

function App() {
  return (
    <div className="App">
        <ClassCounter/>
        <hr/>
        <HookCounter/>
        <hr/>
        <HookCounterMultiple/>
        <hr/>
        <HookObject/>
        <hr/>
        <HookArray/>
    </div>
  );
}

export default App;
