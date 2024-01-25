import Li from "./Li";

export default function Navigation(props) {
  const classes = props.classes;

  return (
    <nav
      className={classes.navigationBlock}
      onClick={(e) =>
        props.onClickList(e, props.setPage, props.setShowProduct, props.listRef)
      }
    >
      <ul className={classes.navigationList}>{props.children}</ul>
    </nav>
  );
}
