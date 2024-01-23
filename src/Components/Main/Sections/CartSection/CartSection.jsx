import classes from "./CartSection.module.scss";

import Navigation from "../Navigation";

export default function CartSection(props) {
  const classes = props.classes;

  return (
    <section className={classes.section}>
      <div className={props.classContainer}>
        <div className={classes.sectionBlock}>
          <div className={classes.cart}>
            <Navigation
              classes={classes}
              tab={props.tab}
              setTab={props.setTab}
              onClick={props.onClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
