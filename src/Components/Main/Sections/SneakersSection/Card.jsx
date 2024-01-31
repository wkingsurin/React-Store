export default function Card(props) {
  return (
    <div className={props.classes.wrapper}>
      <div className={props.classes.card}>
        <a
          id={props.id}
          onClick={(e) =>
            props.onClickProduct(e, props.setShowProduct, props.setPage)
          }
          href={"#"}
          className={props.classes.imageBlock}
        >
          <img
            src={props.src || "./nike-air-jordan-xxxvii-w1/1.jpg"}
            alt={props.src || "Nike Air Jordan XXXVII"}
            className={props.classes.image}
          />
        </a>
        <div className={props.classes.description}>
          <div className={props.classes.price}>
            <span className={props.classes.currency}>
              {props.currency || "$"}
            </span>
            <span className={props.classes.value}>{props.value || 329}</span>
          </div>
          <a
            id={props.id}
            onClick={(e) =>
              props.onClickProduct(e, props.setShowProduct, props.setPage)
            }
            href={"#"}
            className={props.classes.text}
          >
            {props.name || "Nike Air Jordan XXXVII"}
          </a>
        </div>
      </div>
    </div>
  );
}
