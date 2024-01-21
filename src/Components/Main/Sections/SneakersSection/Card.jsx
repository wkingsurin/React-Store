export default function Card({ classes, src, alt, name, currency, value }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <a href={"#"} className={classes.imageBlock}>
          <img
            src={src || "./nike-air-jordan-xxxvii-w1/1.jpg"}
            alt={src || "Nike Air Jordan XXXVII"}
            className={classes.image}
          />
        </a>
        <div className={classes.description}>
          <div className={classes.price}>
            <span className={classes.currency}>{currency || "$"}</span>
            <span className={classes.value}>{value || 329}</span>
          </div>
          <a href={"#"} className={classes.text}>
            {name || "Nike Air Jordan XXXVII"}
          </a>
        </div>
      </div>
    </div>
  );
}
