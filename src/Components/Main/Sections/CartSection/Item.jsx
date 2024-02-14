import { useState } from "react";
import Interaction from "../ProductSection/Description/Interaction/Interaction";

import { correctName, saveCart } from "../../../../utils";

export default function Item(props) {
  const classes = props.classes;
  const product = props.product;
  const name = correctName(product.name);

  console.log(product);

  function handleItemDecrement(e) {
    let newCart;
    const target = e.target.closest("button");
    const item = target.closest("[data-id]");

    props.setCartState((prevCart) => {
      newCart = prevCart.map((product) => {
        if (product.id == item.dataset.id) {
          return {
            ...product,
            amount: product.amount - 1 == 0 ? 1 : product.amount - 1,
            totalPrice:
              product.amount - 1 == 0
                ? product.price
                : (product.amount - 1) * product.price,
          };
        } else {
          return product;
        }
      });
      const total = newCart.reduce((acc, next) => acc + next.totalPrice, 0);
      props.setTotalPrice(total);

      saveCart(newCart);
      return newCart;
    });
  }

  function handleItemIncrement(e) {
    let newCart;
    const target = e.target.closest("button");
    const item = target.closest("[data-id]");

    props.setCartState((prevCart) => {
      newCart = prevCart.map((product) => {
        if (product.id == item.dataset.id) {
          return {
            ...product,
            amount: product.amount + 1,
            totalPrice: (product.amount + 1) * product.price,
          };
        } else {
          return product;
        }
      });
      const total = newCart.reduce((acc, next) => acc + next.totalPrice, 0);
      props.setTotalPrice(total);

      saveCart(newCart);
      return newCart;
    });
  }

  return (
    <div
      className={classes.item}
      onClick={(e) => props.onClickItem(e, props.setCartState)}
      id={"removeItem" + product.id}
      data-id={product.id}
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
            amount={product.amount || 1}
            handleItemDecrement={(e) => handleItemDecrement(e)}
            handleItemIncrement={(e) => handleItemIncrement(e)}
          />
        </div>
      </div>
    </div>
  );
}
