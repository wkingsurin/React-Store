import Li from "./Li";

export default function Navigation(props) {
  const classes = props.classes;

  return (
    <nav className={classes.navigationBlock}>
      <ul className={classes.navigationList}>{props.children}</ul>
    </nav>
  );
}
