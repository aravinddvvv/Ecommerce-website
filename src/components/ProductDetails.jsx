import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false); 

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  const handleBuyNow = () => {
   
    setOrderPlaced(true);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <h2>Product Details</h2>
      <img className="image" src={product?.images} alt={product.name} />
      <div className="product-info">
        <h5 className='product-name'>Product name:{product.title}</h5>
        <p><strong>Description:</strong> {product.description}</p>
        <h4 className='price'><strong>Price:</strong> ${product.price}</h4>
      </div>
      <div className="product-actions">
        <button onClick={handleBuyNow}>Buy now</button>
      </div>
      {orderPlaced && (
        <div className="huge-card">
          <div className="order-placed-message"> Hureyyyy !! <br/> Your order has been placed! &#128077;</div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
