import Interaction from "../ProductSection/Description/Interaction/Interaction";

import { correctName } from "../../../../Modules/correctName";

export default function Item(props) {
  const classes = props.classes;
  const product = props.product;
  const name = correctName(product.name);

  return (
    <div className={classes.item}>
      <a href={"#"} className={classes.imageBlock}>
        <img src={product.src} alt={product.alt} className={classes.image} />
      </a>
      <div className={classes.descriptionBlock}>
        <div className={classes.description}>
          <a href={"#"} className={classes.name}>
            {name}
          </a>
          <p className={classes.text}>Size: {`${product.sizes[0]}`}</p>
        </div>
        <div className={classes.interactionBlock}>
          <div className={classes.price}>
            <span className={classes.currency}>{"$"}</span>
            <span className={classes.value}>{product.price}</span>
          </div>
          <Interaction
            classesProduct={classes}
            removeBtn={true}
            amount={props.amount || 1}
          />
        </div>
      </div>
    </div>
  );
}
