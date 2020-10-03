import './Product.scss';
import React from 'react';


const currency = (num) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(num)
}

const Product = (props) => {
  const { data, data: { name, Image, priceRange }} = props;

  return (
    <div className="ui centered card">
      <div className="image" role="button">
        <img src={Image} alt={name} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="extra content">
          {currency(priceRange)}
      </div>
    </div>
  );
}

export default Product;