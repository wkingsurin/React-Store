import Li from "./Li";

export default function Navigation({ classes }) {
  return (
    <nav className={classes.navigationBlock}>
      <ul className={classes.navigationList}>
        <Li classes={classes} active={false} text={"Main"} />
        <Li classes={classes} active={false} text={"Sneakers"} />
        <Li classes={classes} active={true} text={"Nike Air Jordan XXXVII"} />
      </ul>
    </nav>
  );
}
