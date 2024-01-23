import classes from "./ProductSection.module.scss";

import Navigation from "../Navigation";
import Gallery from "./Gallery/Gallery";
import Description from "./Description/Description";
import Zoom from "./Zoom";

export default function ProductSection(props) {
  const product = props.data;

  console.log(props.zoom);

  return (
    <section className={props.classesMain.section}>
      <div className={props.classContainer}>
        <div className={props.classesMain.sectionBlock}>
          <Navigation
            onClick={props.onClick}
            tab={props.tab}
            setTab={props.setTab}
            classes={props.classesMain}
          />
          <div className={classes.product}>
            <div className={classes.sectionContent}>
              <Gallery classesProduct={classes} product={product} />
              <Description classesProduct={classes} product={product} />
            </div>
          </div>
          {!props.zoom && <Zoom classes={classes} product={product} />}
        </div>
      </div>
    </section>
  );
}
