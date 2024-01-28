import classes from "./CartSection.module.scss";

import Navigation from "../Navigation/Navigation";
import Li from "../Navigation/Li";

import Item from "./Item";
import Order from "./Order";

export default function CartSection(props) {
  const classesMain = props.classes;
  const cart = JSON.parse(props.cart);

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
              {cart.length > 0 ? (
                <>
                  <div className={classes.items}>
                    {cart.map((item, index) => {
                      return (
                        <Item
                          key={index}
                          classes={classes}
                          product={item}
                          amount={item.amount || 1}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
