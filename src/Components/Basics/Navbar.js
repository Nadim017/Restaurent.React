import React from "react";

const Navbar = ({ filterItem, categoryList }) => {
  return (
    <>
      <nav className="navBar">
        {categoryList.map((element) => {
          return (
            <button className="item" onClick={() => filterItem(element)}>
              {element}
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
