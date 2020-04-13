import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Epp from './App';
import logo from './logo.svg';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Axios from 'axios';

class DolarToday extends React.Component {
  constructor(money) {
    super(money);
    
    this.state = {
      kind1: '',
      kind2: ''
    };
  }
  
  componentDidMount(){
	Axios.get('https://s3.amazonaws.com/dolartoday/data.json')
      .then(({ data })=> {
      	this.setState({ 
          kind1: data.USD.promedio,
          kind2: data.USD.transferencia
        });
      })
      .catch((err)=> {})
  }
      
  render() {
    return <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p><h4>Dólar Promedio</h4>{ this.state.kind1 } Bs</p>
      <p><h4>Dólar Transferencia</h4>{ this.state.kind2 } Bs</p>
      <p>React</p>
      </header>
    </div>;
  }
}

ReactDOM.render(
    <DolarToday />,
  document.getElementById('root')
);