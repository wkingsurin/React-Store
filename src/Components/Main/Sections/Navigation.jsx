export default function Navigation({ classes, list }) {
  return (
    <nav className={classes.navigationBlock}>
      <ul className={classes.navigationList}>
        <li className={classes.listItem}>
          <button>{list.first}</button>
        </li>
        <li className={`${classes.listItem} ${classes.active}`}>
          <button>{list.second}</button>
        </li>
      </ul>
    </nav>
  );
}
