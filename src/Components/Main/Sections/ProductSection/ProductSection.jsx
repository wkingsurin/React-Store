import classes from "./ProductSection.module.scss";

import Navigation from "../Navigation";
import Li from "../Li";

import Gallery from "./Gallery/Gallery";
import Description from "./Description/Description";
import Zoom from "./Zoom";

import { correctName } from "../../Main";

export default function ProductSection(props) {
  const classesMain = props.classesMain;
  const product = props.data;
  const productName = correctName(product.name);

  return (
    <section className={classesMain.section}>
      <div className={props.classContainer}>
        <div className={classesMain.sectionBlock}>
          <Navigation classes={classesMain} onClickList={props.onClickList}>
            <Li
              classes={classesMain}
              active={false}
              text={"Main"}
              id="preview"
            />
            <Li
              classes={classesMain}
              active={false}
              text={"Sneakers"}
              id="store"
            />
            <Li classes={classesMain} active={true} text={productName} />
          </Navigation>
          <div className={classes.product}>
            <div className={classes.sectionContent}>
              <Gallery classesProduct={classes} product={product} />
              <Description
                classesProduct={classes}
                product={product}
                productName={productName}
              />
            </div>
          </div>
          {!props.zoom && <Zoom classes={classes} product={product} />}
        </div>
      </div>
    </section>
  );
}
