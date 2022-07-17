import React, {useState} from "react";

function Item({ name, category }) {

  const [listItem ,setlistItem] = useState('')

  function handleItem(){
    setlistItem("in-cart")
  }
  return (
    <li className={listItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>{listItem === "" ?"Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;