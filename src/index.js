import React from 'react';
import ReactDOM from 'react-dom';

import "bulma/css/bulma.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App'
// //2.or  add this to index.js:
// <link
// rel="stylesheet"
// href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
// integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
// crossorigin="anonymous"
//     />

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
 