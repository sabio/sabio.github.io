import React from 'react';
import ReactDOM from 'react-dom';
import my_css from './index.css';
import normalize from 'normalize.css';
import App from './containers/App'


class Index extends React.Component{
  render(){
    return(
      <App />
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
