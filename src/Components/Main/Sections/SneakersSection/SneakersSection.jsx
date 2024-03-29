import classes from "./SneakersSection.module.scss";

import { correctName } from "../../../../utils";

import Card from "./Card";
import Navigation from "../Navigation/Navigation";
import Li from "../Navigation/Li";

export default function SneakersSection(props) {
  return (
    <section className={props.classSection}>
      <div className={props.classContainer}>
        <div className={classes.sectionBlock}>
          <Navigation
            listRef={props.listRef}
            classes={props.classesMain}
            onClickList={props.onClickList}
            setPage={props.setPage}
            setShowProduct={props.setShowProduct}
          >
            <Li
              classes={props.classesMain}
              active={false}
              text={"Main"}
              id="preview"
            />
            <Li
              classes={props.classesMain}
              active={true}
              text={"Sneakers"}
              id="store"
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
                      value={item.price}
                      src={item.src}
                      alt={item.name}
                      onClickProduct={props.onClickProduct}
                      setPage={props.setPage}
                      setShowProduct={props.setShowProduct}
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
