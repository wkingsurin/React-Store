import CloseSvg from "../ProductSection/CloseSvg";
import SuccessSvg from "../../../SuccessSvg";

import { saveCart } from "../../../../utils";

export default function BuyAlert({
  cardClasses,
  name,
  setIsBuyed,
  cartState,
  setCartState,
}) {
  const classes = cardClasses;

  const handleOkClick = (e) => {
    setCartState([]);
    saveCart([]);
    setIsBuyed(false);
  };
  const handleClose = (e) => {
    if (e.target.closest("#buy")) return;
    setCartState([]);
    saveCart([]);
    setIsBuyed(false);
  };

  return (
    <div className={cardClasses.buy} onClick={handleClose}>
      <div className={cardClasses.inner}>
        <div className={cardClasses.content} id="buy">
          <div className={cardClasses.row}>
            <div className={cardClasses.icon}>
              <SuccessSvg />
            </div>
            <div className={cardClasses.description}>
              <span className={cardClasses.title}>Благодарим за покупку!</span>
              <p className={cardClasses.text}>
                {name}, будем рады видеть вас снова!
              </p>
            </div>
          </div>
          <div className={cardClasses.row}>
            <button className={cardClasses.close} onClick={handleOkClick}>
              Ок
            </button>
          </div>
        </div>
        <button className={classes.closeButton}>
          <CloseSvg classes={classes} />
        </button>
      </div>
    </div>
  );
}
