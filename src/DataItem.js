import React from 'react';

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function DataItem({product, value}) {
      return (<div>
            <div className="column">
                  <div><img align="left" src={`../img/${product.pic}`} alt="product pic" width="250" height="150" border="1"/></div>

                <div style={{"min-width": 210, "margin-left": 5}}>
                    <div>Name: {capitalise(product.name)}</div>
                    <div>Size: {capitalise(product.size)}</div>
                    <div>Department: {capitalise(product.department)}</div>
                </div> 

                <div style={{"margin-left": 5, "margin-right": 200}}>Price: £{product.price.toFixed(2)}</div>
            </div>
        </div>)
};



export default DataItem;
