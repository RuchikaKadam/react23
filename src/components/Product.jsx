import React, { useContext } from 'react';
import { ProductsContext } from '../App';

const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

const Product = () => {
  const { addToCart } = useContext(ProductsContext);

  return (
    <div className='product_cont'>
      <h2>Products</h2>
      {Products.map(product => (
        <div key={product.id} className='products'>
          <div>{product.name} </div>
          <div>{product.price}</div>
          <div><button onClick={() => addToCart(product)}>+</button></div>
        </div>
      ))}
    </div>
  );
};

export default Product;