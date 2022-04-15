import React from "react";

import classes from "./ContentHeader.module.css";

import Chip from "./Chip";

const ContentHeader = () => {
  return (
    <div className={classes["content-header"]}>
      <div className={classes["chips-wrapper"]}>
        <div className={classes["scroll-container"]}>
          <Chip title="All" />
        </div>
      </div>
    </div>
  );
};

export default ContentHeader;
