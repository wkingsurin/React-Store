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
          onClick={props.handleItemDecrement}
        >
          <DecrementSvg classesProduct={classesProduct} />
        </button>
        <div className={classesProduct.input}>{props.amount}</div>
        <button
          className={`${classesProduct.increment} ${classesProduct.iconBlock}`}
          id="increment"
          onClick={props.handleItemIncrement}
        >
          <IncrementSvg classesProduct={classesProduct} />
        </button>
      </div>
      {props.removeBtn && (
        <button
          className={classesProduct.removeBtn}
          id={"remove" + props.productId}
          data-remove="remove"
        >
          Remove
        </button>
      )}
    </div>
  );
}
