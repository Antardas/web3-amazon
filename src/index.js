import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
console.log(process.env.APP_ID);

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId='DBZljNCpRwBCrXIi1Ve823ROHyxo32ATvhOloWwR' serverUrl='https://ii6twhwaocxw.usemoralis.com:2053/server'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
