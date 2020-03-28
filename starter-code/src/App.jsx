import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable/ProductTable';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductTable />
      </div>
    );
  }
}
