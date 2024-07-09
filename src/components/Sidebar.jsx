import React from "react";
import { createQueryObject } from "../helper/helper";
import { FaListUl } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { categories } from "../constant/List";

const Sidebar = ({ query, setQuery }) => {
  const categoryeHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryeHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
