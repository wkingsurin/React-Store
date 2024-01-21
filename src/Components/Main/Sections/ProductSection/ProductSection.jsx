import classes from "./ProductSection.module.scss";

import Navigation from "../Navigation";
import Gallery from "./Gallery/Gallery";
import Description from "./Description/Description";

export default function ProductSection({
  classesMain,
  classContainer,
  data,
  tab,
  setTab,
  onClick,
}) {
  const product = data[2];

  return (
    <section className={classesMain.section}>
      <div className={classContainer}>
        <div className={classesMain.sectionBlock}>
          <Navigation
            onClick={onClick}
            tab={tab}
            setTab={setTab}
            classes={classesMain}
          />
          <div className={classes.product}>
            <div className={classes.sectionContent}>
              <Gallery classesProduct={classes} product={product} />
              <Description classesProduct={classes} product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
