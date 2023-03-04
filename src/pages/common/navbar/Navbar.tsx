import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Switch } from "../themeSwitch";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");
  const searchMovie = () => {
    if (query.trim() === "") return;
    navigate(`/search/${query.trim()}`);
  };
  return (
    <nav className={styles["nav"]}>
      <ul className={styles["list"]}>
        <li className={styles["item"]}>
          <Link to='/home'>Home</Link>
        </li>
        <li className={styles["item"]}>
          <Link to='/favorites'>Favorites</Link>
        </li>
        <li className={`${styles["item"]} ${styles["search"]}`}>
          <svg className={styles["search-icon"]} onClick={() => searchMovie()} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
            <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
          </svg>
          <input
            className={styles["search-input"]}
            id='search'
            type='text'
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              return e.key === "Enter" ? searchMovie() : () => {};
            }}
          />
        </li>
        <li className={`${styles["item"]} ${styles["float-right"]}`}>
          <Switch />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
