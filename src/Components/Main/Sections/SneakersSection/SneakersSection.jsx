import classes from "./SneakersSection.module.scss";

import { correctName } from "../../Main";

import Card from "./Card";
import Navigation from "../Navigation";
import Li from "../Li";

export default function SneakersSection(props) {
  return (
    <section className={props.classSection}>
      <div className={props.classContainer}>
        <div className={classes.sectionBlock}>
          <Navigation
            onClick={props.onClick}
            tab={props.tab}
            setTab={props.setTab}
            classes={props.mainClasses}
          >
            <Li classes={props.mainClasses} active={false} text={"Main"} />
            <Li classes={props.mainClasses} active={true} text={"Sneakers"} />
          </Navigation>
          <div className={classes.sneakers}>
            <div className={classes.sectionContent}>
              <h2 className={classes.title}>Sneakers</h2>
              <div className={classes.cardsList}>
                {props.data.map((item) => {
                  const name = correctName(item.name);

                  return (
                    <Card
                      key={item.id}
                      id={item.id}
                      classes={classes}
                      name={name}
                      src={item.src}
                      alt={item.name}
                      onClickProduct={props.onClickProduct}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
