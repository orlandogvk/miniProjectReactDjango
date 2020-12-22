import React, { Component } from 'react';
import './App.css';
import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';

class App extends Component {
  render(){
    return(
      <div className="app">
        <CustomLayout>
          <ArticleList/>
        </CustomLayout>
      </div>
    )
  }
}

export default App;
