import './ProductList.scss';
import React, { useState } from 'react';

import Product from '../Product';

const ProductList = () => {
  const [ products, setProducts ] = useState([
    {
      "id":"1",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"2",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"3",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"4",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"5",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"6",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"7",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"8",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"9",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    },
    {
      "id":"10",
      "name":"Ceramic Taper Holder - Earth",
      "priceRange":"50",
      "Image":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0883/ceramic-taper-holder-earth-m.jpg"
    }

  ]);
  
  let items = null;
  if ( products && products.length !== 0) {
    items =  products.map(product => {
      return (
        <div key={product.id} className="column">
          <Product data={product} />   
        </div>
      );
    });
  } 

  return (
    <>
      <div className="product-list ui stackable four column grid">
        { items }
      </div>
    </>
  );
  
}

export default ProductList;