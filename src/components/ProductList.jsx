import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

 

  return (
    <center>
    <div className='container m-3'>
      <h2 className='list'>Our Trending Items</h2>
      <div className='product-list'>
        {products.map(product => (
          <div className='product-card' key={product.id}>
            <Link to={`/products/${product.id}`} className='product-link'>
              <img height={'200px'} src={product?.images} alt='' className='product-image' />
              <div className='product-details'>
                <h5 className='product-name'>{product.title}</h5>
                <h6 className='product-desc'>{product.description.slice(0,100)}</h6>
                <h4 className='product-price'>$ {product.price}</h4>
              </div>
              <div className='d-flex justify-content-between'>
               
                <button className='cart-btn' >Add to Cart</button>
                <button className='buy-now-btn'>Wishlist</button>
              </div>
              <br/>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </center>
  );
}

export default ProductList;
