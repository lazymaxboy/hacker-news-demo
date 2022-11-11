import React from "react";
import { useState } from "react";
import Hit, { HitType } from "../hit/Hit";
import styles from "./HitList.module.css";
import PropTypes from "prop-types";

const HitList = ({ hits }) => {
  const [h, setH] = useState(hits);

  const handleClick = (id) => {
    const hitIndex = hits.findIndex((hit) => hit.objectId === id);
    const newhit = hits.splice(hitIndex, 1);
    setH(newhit);
  };

  return (
    <div className={styles.list}>
      {hits.map((hit) => (
        <Hit key={hit.objectId} hit={hit} handleClick={handleClick} />
      ))}
    </div>
  );
};

export const HitListType = {
  hits: PropTypes.arrayOf(HitType),
};

export default HitList;
