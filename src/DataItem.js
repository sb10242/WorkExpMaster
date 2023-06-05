import React from 'react';

function DataItem({product}) {

  return (
            <div>
                 <img src={`../img/${product.pic}`} alt="product pic" />
                 <p>Name: {product.name}</p>
                 <p>Size: {product.size}</p>
                 <p>Department: {product.department}</p>
                 <p>Proce: {product.price}</p>
            </div>
        );
}

export default DataItem; 