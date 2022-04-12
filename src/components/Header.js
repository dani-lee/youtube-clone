import classes from "./Header.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes["header__left"]}>
        <FontAwesomeIcon icon={faBars} />
        <img
          className={classes["header__logo"]}
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="logo"
        />
      </div>
      <div className={classes["header__input"]}>
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={classes["header__inputButton"]}
        />
      </div>
      <div className={classes["header__icons"]}>
        <FontAwesomeIcon icon={faVideo} className={classes["header__icon"]} />
        <FontAwesomeIcon
          icon={faGripVertical}
          className={classes["header__icon"]}
        />
        <FontAwesomeIcon icon={faBell} className={classes["header__icon"]} />
        <FontAwesomeIcon
          icon={faCircleUser}
          className={classes["header__icon"]}
        />
      </div>
    </div>
  );
};

export default Header;
