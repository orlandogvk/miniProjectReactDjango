import React, { Component } from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <CustomLayout>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    )
  }
}

export default App;
