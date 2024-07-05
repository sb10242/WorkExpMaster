import React, { useState , useEffect} from 'react';
import data from './data.json';
import DataItem from './DataItem';

function DataTable() {
  
  const [itemNo, setItemNo] = useState(window.sessionStorage.getItem("saveState")?window.sessionStorage.getItem("saveState") : 0);
  const [viewType, setViewType] = useState("individual")
  const [sortType, setSortType] = useState("Name a-z")

  useEffect(() => {
    window.sessionStorage.setItem("savestate", itemNo)
  } , [itemNo]);


  function nextPage()
  {
    if (itemNo + 1 < data.length)
    {
      setItemNo(itemNo+1);
    }
  }

  function previousPage()
  {
    if (itemNo - 1 >= 0)
    {
      setItemNo(itemNo-1);
    }
  }

  function startPage()
  {
    setItemNo(0);
  }

  function endPage()
  {
    setItemNo(data.length-1);
  }

  function switchView(index) {
    setItemNo(index)
    setViewType("individual")
  }

  function getImage(index) {
    return <img align="left" onClick={() => switchView(index)} title={"£"+data[index].price.toFixed(2)} src={`../img/${data[index].pic}`} alt="product pic" width="250" height="150" border="1"/>
  }



  return (<div>
    <label>
      <select name="selectedDisplay" value={viewType} style={{float: "right"}} onChange={e => setViewType(e.target.value)}>
        <option value="individual">Individual</option>
        <option value="list">List</option>
        <option value="gallery">Gallery</option>
      </select>
    </label>
    <label>
      <select name="selectedSort" value={sortType} style={{float: "right"}} onChange={e => setSortType(e.target.value)}>
        <option value="nameA-Z">Name A-Z</option>
        <option value="nameZ-A">Name Z-A</option>
        <option value="categoryA-Z">Category A-Z</option>
        <option value="categoryZ-A">Category Z-A</option>
        <option value="priceHigh-Low">Price High-Low</option>
        <option value="priceLow-High">Price Low-High</option>
      </select>
    </label>
    {(viewType == "individual") ? 
    <div><DataItem product={data[itemNo]} value = {viewType} />
    <button onClick={() => startPage()}>Start</button>
    <button onClick={() => previousPage()}>Previous</button> 
    <button onClick={() => nextPage()}>Next</button>
    <button onClick={() => endPage()}>Last</button></div> : null}
    { (viewType == "list") ?
           <div>{data.map(function(product) {
            return (<DataItem product={product} value = {viewType} />)})}</div>: null}
    { (viewType == "gallery") ? 
          <div>{data.map((product, index) =>  {
          return (
          <div>
            <div>{((index+1) % 4 == 0) ?
              <div>
                {getImage(index)}
                {getImage(index-1)}
                {getImage(index-2)}
                {getImage(index-3)}
              </div>: null}
            </div>
            <div>{((index+1) == data.length) ?
              <div>
                { (index+1) % 4 === 3 ? getImage(index-2) : null }
                { (index+1) % 4 >= 2 ? getImage(index-1) : null }
                { (index+1) % 4 >= 1 ? getImage(index) : null }       
              </div>: null}
            </div>
          </div>)})}
          </div>: null
    }
  </div>);
}

export default DataTable;
