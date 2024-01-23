import Li from "./Li";

export default function Navigation({ classes, tab, setTab, onClick }) {
  return (
    <nav className={classes.navigationBlock}>
      <ul className={classes.navigationList}>
        <Li classes={classes} active={false} text={"Main"} id="main" />
        <Li classes={classes} active={false} text={"Sneakers"} id="sneakers" />
        <Li
          classes={classes}
          active={true}
          text={"Nike Air Jordan XXXVII"}
          id="Nike Air Jordan XXXVII"
        />
      </ul>
    </nav>
  );
}
