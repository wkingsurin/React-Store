import classes from "./CartSection.module.scss";

import Navigation from "../Navigation";
import Li from "../Li";

import Item from "./Item";
import Order from "./Order";

export default function CartSection(props) {
  const classesMain = props.classes;
  const cart = props.cart;

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
            <Li classes={classesMain} active={true} text={"Cart"} id="cart" />
          </Navigation>
          <div className={classes.cart}>
            <h2 className={classes.title}>Cart</h2>
            <div className={classes.sectionContent}>
              <div className={classes.items}>
                {cart.map((item, index) => {
                  return <Item key={index} classes={classes} product={item} />;
                })}
              </div>
              <Order classes={classes} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
