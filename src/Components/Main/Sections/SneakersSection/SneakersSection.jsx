import classes from "./SneakersSection.module.scss";

import Card from "./Card";
import Navigation from "../Navigation";

export default function SneakersSection({
  mainClasses,
  classSection,
  classContainer,
}) {
  return (
    <section className={classSection}>
      <div className={classContainer}>
        <div className={classes.sectionBlock}>
          <Navigation
            classes={mainClasses}
            list={{ first: "Main", second: "Sneakers" }}
          />
          <div className={classes.sneakers}>
            <div className={classes.sectionContent}>
              <h2 className={classes.title}>Sneakers</h2>
              <div className={classes.cardsList}>
                <Card
                  classes={classes}
                  name={"Nike Air Jordan XXXVII"}
                  src={"./nike-air-jordan-xxxvii-w1/1.jpg"}
                  alt={"Nike Air Jordan XXXVII"}
                />
                <Card
                  classes={classes}
                  name={"Nike Air Jordan 4 Retro"}
                  src={"./nike-air-jordan-4-retro/1.jpg"}
                  alt={"Nike Air Jordan 4 Retro"}
                />
                <Card
                  classes={classes}
                  name={"Nike Air Raid Black"}
                  src={"./nike-air-raid-b/1.jpg"}
                  alt={"Nike Air Raid Black"}
                />
                <Card
                  classes={classes}
                  name={"Nike Air Raid Gray"}
                  src={"./nike-air-raid-g/1.jpg"}
                  alt={"Nike Air Raid Gray"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
