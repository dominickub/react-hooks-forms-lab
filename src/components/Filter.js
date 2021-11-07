import React, {useState} from "react";


function Filter({ onCategoryChange }) {

  const [search , setSearch]=useState("")  


  function filteringBar(e){
    return setSearch(e.target.value)
    
  }

  return (
    <div className="Filter">
      <input onChange = {filteringBar} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
