import React from 'react';
import './App.css';
import model from './model.json';
import Controller from './controller.js';

function App() {

  return (
    <div className="App">
      <header>
    	<ul>
            {model.data.map((item, i) => (
                <li><a onClick={Controller.showContent} index={i}>{model.data[i].name}</a></li>
            ))}
    	</ul>
    	</header>
    	<div className="container">
    		<div>{model.data[0].content}</div>
    		<div>{model.data[1].content}</div>
    		<div>{model.data[2].content}</div>
    	</div>
    	<footer>
    	<ul>
            {model.data.map((item, i) => (
                <li><a onClick={Controller.showContent}  index={i}>{model.data[i].name}</a></li>
            ))}
    	</ul>
    	</footer>
    </div>
  );
}

export default App;
