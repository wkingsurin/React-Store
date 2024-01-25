import IncrementSvg from "../IncrementSvg";
import DecrementSvg from "../DecrementSvg";

export default function Interaction(props) {
  const classesProduct = props.classesProduct;

  return (
    <div className={classesProduct.interaction}>
      <div className={classesProduct.buttons}>
        <button
          className={`${classesProduct.decrement} ${classesProduct.iconBlock}`}
          id="decrement"
        >
          <DecrementSvg classesProduct={classesProduct} />
        </button>
        <div className={classesProduct.input}>{props.value || 1}</div>
        <button
          className={`${classesProduct.increment} ${classesProduct.iconBlock}`}
          id="increment"
        >
          <IncrementSvg classesProduct={classesProduct} />
        </button>
      </div>
      {props.removeBtn && (
        <button className={classesProduct.removeBtn} id="remove">
          Remove
        </button>
      )}
    </div>
  );
}
