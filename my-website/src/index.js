import React from 'react';
import ReactDOM from 'react-dom';
import csss from './index.css';
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
