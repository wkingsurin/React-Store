import { useState } from "react";
import Interaction from "../ProductSection/Description/Interaction/Interaction";

import { correctName } from "../../../../utils";

export default function Item(props) {
  const [amount, setAmount] = useState(props.amount);

  const classes = props.classes;
  const product = props.product;
  const name = correctName(product.name);

  function handleItemDecrement() {
    if (amount < 1) return;
    setAmount((a) => a - 1);
  }

  function handleItemIncrement() {
    setAmount((a) => a + 1);
  }

  return (
    <div
      className={classes.item}
      onClick={(e) => props.onClickItem(e, props.setCartState)}
      id={"removeItem" + product.id}
    >
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
            productId={product.id}
            amount={amount || 1}
            handleItemDecrement={handleItemDecrement}
            handleItemIncrement={handleItemIncrement}
          />
        </div>
      </div>
    </div>
  );
}
