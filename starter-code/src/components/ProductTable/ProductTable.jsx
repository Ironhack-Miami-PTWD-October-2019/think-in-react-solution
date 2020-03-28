import React, { Component } from 'react';
import productList from '../../data.json';
import SearchBar from '../SearchBar/SearchBar';

class ProductTable extends Component {
  state = {
    data: productList.data
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar data={this.state.data} />
      </div>
    );
  }
}

export default ProductTable;
