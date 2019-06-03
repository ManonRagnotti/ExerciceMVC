import React from 'react';
import './App.css';
import model from './model.json';
import Controller from './controller.js';

function App() {
  return (
    <div className="App">
      <header>
    	<ul>
    		<li><a onClick={showContent}>{model.data[0].name}</a></li>
    		<li><a onClick={showContent}>{model.data[1].name}</a></li>
    		<li><a onClick={showContent}>{model.data[2].name}</a></li>
    	</ul>
    	</header>
    	<div className="container">
    		<div>{model.data[0].content}</div>
    		<div>{model.data[1].content}</div>
    		<div>{model.data[2].content}</div>
    	</div>
    	<footer>
    	<ul>
    		<li><a onClick={showContent}>{model.data[0].name}</a></li>
    		<li><a onClick={showContent}>{model.data[1].name}</a></li>
    		<li><a onClick={showContent}>{model.data[2].name}</a></li>
    	</ul>
    	</footer>
    </div>
  );
}

export default App;
