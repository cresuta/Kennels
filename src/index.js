import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Kennel} from "./components/Kennel";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kennel/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

