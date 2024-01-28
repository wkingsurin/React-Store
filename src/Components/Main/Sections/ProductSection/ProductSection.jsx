import { useState } from "react";
import classes from "./ProductSection.module.scss";

import Navigation from "../Navigation/Navigation";
import Li from "../Navigation/Li";

import Gallery from "./Gallery/Gallery";
import Description from "./Description/Description";
import Zoom from "./Zoom";

import { correctName } from "../../../../Modules/correctName";
import { onClickInteraction } from "../../../../Handlers/onClickInteraction";

export default function ProductSection(props) {
  const [productAmount, setProductAmount] = useState(1);

  const classesMain = props.classesMain;
  const product = props.data;
  const productName = correctName(product.name);

  const onClickMain = (e) => {
    props.setZoom((prev) => !prev);
  };

  return (
    <section className={classesMain.section}>
      <div className={props.classContainer}>
        <div className={classesMain.sectionBlock}>
          <Navigation
            listRef={props.listRef}
            classes={classesMain}
            onClickList={props.onClickList}
            setPage={props.setPage}
            setShowProduct={props.setShowProduct}
          >
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
              <Gallery
                classesProduct={classes}
                product={product}
                onClickMain={onClickMain}
              />
              <Description
                onClickInteraction={onClickInteraction}
                productAmount={productAmount}
                setProductAmount={setProductAmount}
                classesProduct={classes}
                product={product}
                productName={productName}
                cart={props.cart}
              />
            </div>
          </div>
          {!props.zoom && <Zoom classes={classes} product={product} />}
        </div>
      </div>
    </section>
  );
}
