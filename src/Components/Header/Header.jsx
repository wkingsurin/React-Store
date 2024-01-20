import classes from "./Header.module.scss";

import StoreSvg from "./StoreSvg";
import CartSvg from "./CartSvg";

export default function Header({ classContainer }) {
  return (
    <header className={classes.header}>
      <div className={classContainer}>
        <div className={classes.block}>
          <nav className={classes.nav}>
            <ul className={classes.list}>
              <li className={classes.li}>
                <button className={`${classes.button}`}>
                  <StoreSvg classIcon={classes.icon} classPath={classes.path} />
                </button>
              </li>
              <li className={classes.li}>
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
