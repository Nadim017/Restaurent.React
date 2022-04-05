import React, { useState } from "react";
import "./Restaurent.css";
import menuApi from "./MenuApi";
import Cart from "./Cart";
import Navbar from "./Navbar";
const uniqueList = [
  ...new Set(
    menuApi.map((curEle) => {
      return curEle.category;
    })
  ),
  "All",
];
const Restaurent = () => {
  const [menu, setMenu] = useState(menuApi);
  const [categoryList, setCategoryList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenu(menuApi);
      return;
    }
    const updatedList = menuApi.filter((cur) => {
      return cur.category === category;
    });
    setMenu(updatedList);
  };

  return (
    <>
      <Navbar categoryList={categoryList} filterItem={filterItem} />
      <Cart menu={menu} />
    </>
  );
};

export default Restaurent;
