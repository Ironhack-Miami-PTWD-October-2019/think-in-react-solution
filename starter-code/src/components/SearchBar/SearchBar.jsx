import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import './search-component.css';

class SearchBar extends Component {
  state = {
    searchName: '',
    stocked: false,
    searchCategory: ''
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = () => {
    this.setState({ stocked: !this.state.stocked });
  };

  render() {
    const { searchName, stocked, searchCategory } = this.state;
    const { data } = this.props;
    return (
      <div>
        <p>Search</p>
        <input
          className="input-text"
          type="text"
          name="searchName"
          value={searchName}
          onChange={this.handleChange}
        />
        <div className="search-container">
          <label htmlFor="category">Enter a Category</label>
          <br />
          <input
            className="input-text"
            type="text"
            name="searchCategory"
            id="category"
            value={searchCategory}
            onChange={this.handleChange}
          />
        </div>
        <div className="search-container">
          <label htmlFor="stocked">
            <input
              type="checkbox"
              name="stocked"
              id="stocked"
              checked={stocked}
              onChange={this.handleCheckboxChange}
            />
            Only show products in stock
          </label>
        </div>

        <hr />

        <ProductList
          data={data}
          searchName={searchName}
          stocked={stocked}
          category={searchCategory}
        />
      </div>
    );
  }
}

export default SearchBar;
