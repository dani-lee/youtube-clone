import classes from "./SidebarRow.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas);
library.add(far);

const SidebarRow = (props) => {
  return (
    <div
      className={`${classes.sidebarRow} ${props.selected && classes.selected}`}
    >
      <FontAwesomeIcon icon={props.icon} className={classes["sidebar__icon"]} />
      <span className={classes["sidebar__title"]}>{props.title}</span>
    </div>
  );
};

export default SidebarRow;
