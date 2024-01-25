import classes from "./Header.module.scss";

import StoreSvg from "./StoreSvg";
import CartSvg from "./CartSvg";

export const headerActiveClass = classes.active;

export default function Header(props) {
  return (
    <header
      onClick={(e) =>
        props.onClick(
          e,
          props.setPage,
          props.setShowProduct,
          headerActiveClass,
          props.listRef
        )
      }
      className={classes.header}
    >
      <div className={props.classContainer}>
        <div className={classes.block}>
          <nav className={classes.nav}>
            <ul ref={props.listRef} className={classes.list}>
              <li id="store" className={classes.li}>
                <button className={`${classes.button}`}>
                  <StoreSvg classIcon={classes.icon} classPath={classes.path} />
                </button>
              </li>
              <li id="cart" className={classes.li}>
                <button className={classes.button}>
                  <CartSvg classIcon={classes.icon} classPath={classes.path} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
