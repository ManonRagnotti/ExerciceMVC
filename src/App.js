import React from 'react';
import './App.css';
import model from './model.json';
import Controller from './controller.js';

function App() {

  return (
    <div className="App">
      <header>
    	<ul>
            {model.data.map((name, i) => (
                <li><a onClick={Controller.showContent} index={i}>{model.data[i].name}</a></li>
            ))}
    	</ul>
    	</header>
    	<div className="container">
            {model.data.map((content, i) => (
                <div index={i}>{model.data[i].content}</div>
            ))}
    	</div>
    	<footer>
    	<ul>
            {model.data.map((name, i) => (
                <li><a onClick={Controller.showContent}  index={i}>{model.data[i].name}</a></li>
            ))}
    	</ul>
    	</footer>
    </div>
  );
}

export default App;
