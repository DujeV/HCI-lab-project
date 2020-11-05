import React from "react"

import styles from "./style.module.css"

const ComboboxItem = ({ language, name, flag, setSelected, selected }) => (
  <li
    key={name}
    className={`${styles.comboboxItem} ${selected ? styles.selected : ""}`}
    onClick={() => setSelected({ name, language })}
  >
    <span>{language}</span>
    <img src={flag} alt={name} />
  </li>
)
export default ComboboxItem
