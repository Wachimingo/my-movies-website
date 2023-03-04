import React, { useState, useEffect } from "react";
import styles from "./switch.module.scss";

export const Switch = () => {
  const [active, setActive] = useState(false);

  const switchThemeHandler = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.className = active ? "dark" : "light";
  }, [active]);

  const isActive = active ? "notch-on" : "notch-off";

  return (
    <div className={styles["toggle-wrapper"]} onClick={() => switchThemeHandler()}>
      <div className={`${styles[isActive]}`}></div>
    </div>
  );
};
