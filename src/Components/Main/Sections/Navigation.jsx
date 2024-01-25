import Li from "./Li";

export default function Navigation(props) {
  const classes = props.classes;

  return (
    <nav
      className={classes.navigationBlock}
      onClick={(e) => props.onClickList(e)}
    >
      <ul className={classes.navigationList}>{props.children}</ul>
    </nav>
  );
}
