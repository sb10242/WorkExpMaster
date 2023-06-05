import React, { useState } from 'react';
import data from './data.json';
import DataItem from './DataItem';

function DataTable() {

  const [itemNo, setItemNo] = useState(0);

  function nextPage()
  {
    if (itemNo + 1 < data.length)
    {
      setItemNo(itemNo+1);
    }
  }

  return (<div>
            <DataItem product={data[itemNo]} />
            <button onClick={() => nextPage()}>Next</button>  
          </div>);
}

export default DataTable; 