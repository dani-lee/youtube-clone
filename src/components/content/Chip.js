import classes from "./Chip.module.css";

const Chip = (props) => {
  return <div className={classes.chip}>{props.title}</div>;
};

export default Chip;
