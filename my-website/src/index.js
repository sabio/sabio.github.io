<<<<<<< HEAD
//var React = require('react');
//var ReactDOM = require('react-dom');
//require('./index.css');

import React from 'react';
import ReactDOM from 'react-dom';
import csss from './index.css';


=======
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
>>>>>>> 2401d471312ff49d3e5708a10d10783834ea8aab

class App extends React.Component{
  render(){
    return(
      <div>
<<<<<<< HEAD
        <h1>Hello worldx!!</h1>
=======
        <h1>Hello world!!</h1>
>>>>>>> 2401d471312ff49d3e5708a10d10783834ea8aab
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
