
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// console.log(process.env);
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
    <div>
      <center>
      <h1 id="heading">Weather App</h1>
      <App/>
      </center>
    </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

