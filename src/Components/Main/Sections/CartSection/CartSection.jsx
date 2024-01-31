import classes from "./CartSection.module.scss";

import Navigation from "../Navigation/Navigation";
import Li from "../Navigation/Li";

import Item from "./Item";
import Order from "./Order";

export default function CartSection(props) {
  const classesMain = props.classes;
  let cart = JSON.parse(props.cart);

  console.log("render Cart");
  // Корзину можно сделать как сущность 'object' куда можно занести хранилище,
  // состояние и каждый раз при клике на кнопки обновлять её содержимое => и она будет при каждом клике рендериться

  const onClickItem = (e) => {
    if (!e.target.closest("button")) return;
    const target = e.target.closest("button");

    if (target.dataset.remove == "remove") {
      const parent = target.closest("#removeItem" + target.id.substring(6));
      const parentIdNumber = parent.id.substring(10);
      parent.remove();

      const clearedCart = cart.filter(
        (product) => product.id != parentIdNumber
      );

      const clearedCartJSON = JSON.stringify(clearedCart);
      localStorage.setItem("cart", clearedCartJSON);

      if (clearedCart.length < 1) {
        props.setCartState(false);
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
              {/* {cart.length > 0 ? (
                <>
                  <div className={classes.items}>
                    {cart.map((item, index) => {
                      return (
                        <Item
                          key={index}
                          classes={classes}
                          product={item}
                          amount={item.amount || 1}
                          onClickItem={onClickItem}
                        />
                      );
                    })}
                  </div>
                  <Order classes={classes} />
                </>
              ) : (
                <div className={classes.emptyCart}>
                  <p>Select a product</p>
                </div>
              )} */}
              {props.cartState && (
                <>
                  <div className={classes.items}>
                    {cart.map((item, index) => {
                      return (
                        <Item
                          key={index}
                          classes={classes}
                          product={item}
                          amount={item.amount || 1}
                          onClickItem={onClickItem}
                        />
                      );
                    })}
                  </div>
                  <Order classes={classes} />
                </>
              )}
              {props.cartState == false && (
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
