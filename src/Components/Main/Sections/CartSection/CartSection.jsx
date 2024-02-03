import classes from "./CartSection.module.scss";
import { useEffect } from "react";
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

export default function CartSection(props) {
  const classesMain = props.classes;
  let cart = JSON.parse(localStorage.getItem("cart"));

  console.log("render Cart");

  useEffect(() => {
    props.setCartState((prev) => (cart.length > 0 ? cart : []));
  }, []);
  // Корзину можно сделать как сущность 'object' куда можно занести хранилище,
  // состояние и каждый раз при клике на кнопки обновлять её содержимое => и она будет при каждом клике рендериться

  const onClickItem = (e, setCartState) => {
    if (!e.target.closest("button")) return;
    const target = e.target.closest("button");

    if (target.dataset.remove == "remove") {
      const removedItem = getItem(e.target, e.target.id);
      const removedItemId = getItemId(removedItem.id);

      removedItem.remove();
      cart = getCurrentCart(cart, removedItemId);

      const clearedCart = cart.filter((item) => item.id != removedItemId);
      saveCart(clearedCart);

      if (clearedCart.length < 1) {
        setCartState([]);
      }
    }
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
                          amount={item.amount || 1}
                          onClickItem={onClickItem}
                          setCartState={props.setCartState}
                        />
                      );
                    })}
                  </div>
                  <Order classes={classes} />
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
    </section>
  );
}
