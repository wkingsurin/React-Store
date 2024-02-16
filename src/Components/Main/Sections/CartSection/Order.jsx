export default function Order(props) {
  const classes = props.classes;
  const cartLength = props.cartLength;

  return (
    <div className={classes.order}>
      <div className={classes.orderInnerWrapper}>
        <div className={classes.infoWrapper}>
          <div className={classes.orderInfo}>
            <p className={classes.text}>Products ({cartLength})</p>
          </div>
          <div className={classes.orderTotal}>
            <span className={classes.currency}>$</span>
            <span className={classes.value}>{props.total}</span>
          </div>
        </div>
        <button
          className={classes.buyButton}
          onClick={(e) => props.onClickBuy(e)}
        >
          Buy
        </button>
      </div>
    </div>
  );
}
