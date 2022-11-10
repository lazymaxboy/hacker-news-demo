import React from "react";
import Hit, { HitType } from "../hit/Hit";
import styles from "./HitList.module.css";
import PropTypes from "prop-types";

const HitList = ({ hits }) => {
    return (
        <div className={styles.list}>
            {hits.map((hit) => (
                <Hit key={hit.objectId} hit={hit} />
            ))}
        </div>
    );
};

export const HitListType = {
    hits: PropTypes.arrayOf(HitType),
};

export default HitList;
