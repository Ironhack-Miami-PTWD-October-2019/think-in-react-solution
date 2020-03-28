import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

const ProductList = props => {
  const filteredProducts = props.data.filter(product => {
    if (props.stocked) {
      return (
        product.name.toLowerCase().includes(props.searchName.toLowerCase()) &&
        product.stocked == true &&
        product.category.toLowerCase().includes(props.category.toLowerCase())
      );
    }

    return (
      product.name.toLowerCase().includes(props.searchName.toLowerCase()) &&
      product.category.toLowerCase().includes(props.category.toLowerCase())
    );
  });

  const productList = filteredProducts.map((product, index) => {
    return <ProductRow productKey={index} product={product} />;
  });

  return (
    <table>
      <col width="200" />
      <col width="200" />
      <col width="200" />
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
      </tr>
      {productList}
    </table>
  );
};

export default ProductList;
