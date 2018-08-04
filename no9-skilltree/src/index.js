import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Footer from './components/Footer'
import MainStyle from './style/main.css'

ReactDOM.render(
  <div className="wrapper">
    
    <div className="title">
      <div className="moon"><img src={require(`./assets/img_planet@2x.png`)} /></div>
      介面設計師轉職之路
    </div>
    <App />
    <Footer />
  </div>
  , document.getElementById('root'));

