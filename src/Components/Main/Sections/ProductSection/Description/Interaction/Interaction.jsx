import IncrementSvg from "../IncrementSvg";
import DecrementSvg from "../DecrementSvg";

export default function Interaction(props) {
  const classesProduct = props.classesProduct;

  return (
    <div className={classesProduct.interaction}>
      <div className={classesProduct.buttons}>
        <div
          className={`${classesProduct.decrement} ${classesProduct.iconBlock}`}
        >
          <DecrementSvg classesProduct={classesProduct} />
        </div>
        <div className={classesProduct.input}>{props.value || 1}</div>
        <div
          className={`${classesProduct.increment} ${classesProduct.iconBlock}`}
        >
          <IncrementSvg classesProduct={classesProduct} />
        </div>
      </div>
      {props.removeBtn && (
        <button className={classesProduct.removeBtn}>Remove</button>
      )}
    </div>
  );
}
