//var React = require('react');
//var ReactDOM = require('react-dom');
//require('./index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import csss from './index.css';



class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello worldx!!</h1>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
