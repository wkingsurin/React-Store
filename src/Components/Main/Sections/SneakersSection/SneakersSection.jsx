import classes from "./SneakersSection.module.scss";

import { correctName } from "../../Main";

import Card from "./Card";
import Navigation from "../Navigation";
import Li from "../Li";

export default function SneakersSection({
  mainClasses,
  classSection,
  classContainer,
  data,
  tab,
  setTab,
  onClick,
}) {
  return (
    <section className={classSection}>
      <div className={classContainer}>
        <div className={classes.sectionBlock}>
          <Navigation
            onClick={onClick}
            tab={tab}
            setTab={setTab}
            classes={mainClasses}
          >
            <Li classes={mainClasses} active={false} text={"Main"} />
            <Li classes={mainClasses} active={true} text={"Sneakers"} />
          </Navigation>
          <div className={classes.sneakers}>
            <div className={classes.sectionContent}>
              <h2 className={classes.title}>Sneakers</h2>
              <div className={classes.cardsList}>
                {data.map((item) => {
                  const name = correctName(item.name);

                  return (
                    <Card
                      key={item.id}
                      classes={classes}
                      name={name}
                      src={item.src}
                      alt={item.name}
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
