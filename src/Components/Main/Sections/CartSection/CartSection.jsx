import classes from "./CartSection.module.scss";
import { useState, useEffect } from "react";
import {
  saveCart,
  getCurrentCart,
  getItem,
  getItemId,
} from "../../../../utils";

import Navigation from "../Navigation/Navigation";
import Li from "../Navigation/Li";

import Item from "./Item";
import Order from "./Order";

import BuyAlert from "./BuyAlert";

export default function CartSection(props) {
  const [isBuyed, setIsBuyed] = useState(false);
  const classesMain = props.classes;
  let cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    props.setCartState((prev) => (cart.length > 0 ? cart : []));
  }, []);
  // Корзину можно сделать как сущность 'object' куда можно занести хранилище,
  // состояние и каждый раз при клике на кнопки обновлять её содержимое => и она будет при каждом клике рендериться

  const onClickItem = (e, setCartState) => {
    if (!e.target.closest("button")) return;
    const target = e.target.closest("button");

    if (target.dataset.remove == "remove") {
      const item = getItem(e.target, e.target.id);
      const itemId = getItemId(item.id);

      item.remove();
      cart = getCurrentCart(cart, itemId);

      const clearedCart = cart.filter((item) => item.id != itemId);
      saveCart(clearedCart);

      if (clearedCart.length < 1) {
        setCartState([]);
      }
    }
  };
  const onClickBuy = (e) => {
    setIsBuyed(true);
  };

  console.log(`cartState:`, props.cartState);

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
            <Li classes={classesMain} active={true} text={"Cart"} id="cart" />
          </Navigation>
          <div className={classes.cart}>
            <h2 className={classes.title}>Cart</h2>
            <div className={classes.sectionContent}>
              {props.cartState.length > 0 && (
                <>
                  <div className={classes.items}>
                    {props.cartState.map((item, index) => {
                      return (
                        <Item
                          key={index}
                          classes={classes}
                          product={item}
                          amount={item.amount}
                          onClickItem={onClickItem}
                          setCartState={props.setCartState}
                        />
                      );
                    })}
                  </div>
                  <Order classes={classes} onClickBuy={onClickBuy} />
                </>
              )}
              {props.cartState.length < 1 && (
                <div className={classes.emptyCart}>
                  <p>Select a product</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isBuyed ? (
        <BuyAlert
          cardClasses={classes}
          name={"Name"}
          setIsBuyed={setIsBuyed}
          cartState={props.cartState}
          setCartState={props.setCartState}
        />
      ) : (
        false
      )}
    </section>
  );
}
