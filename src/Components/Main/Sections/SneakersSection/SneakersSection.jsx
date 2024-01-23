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
          <Navigation classes={props.classesMain}>
            <Li
              classes={props.classesMain}
              active={false}
              text={"Main"}
              id="main"
            />
            <Li
              classes={props.classesMain}
              active={true}
              text={"Sneakers"}
              id="sneakers"
            />
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
