import React from 'react';

const ProductRow = ({ productKey, product }) => {
  const { name, price, category } = product;
  return (
    <tr key={productKey}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
    </tr>
  );
};

export default ProductRow;
