import IncrementSvg from "../IncrementSvg";
import DecrementSvg from "../DecrementSvg";

export default function Interaction({ classesProduct, value }) {
  return (
    <div className={classesProduct.interaction}>
      <div className={classesProduct.buttons}>
        <div
          className={`${classesProduct.decrement} ${classesProduct.iconBlock}`}
        >
          <DecrementSvg classesProduct={classesProduct} />
        </div>
        <div className={classesProduct.input}>{value || 1}</div>
        <div
          className={`${classesProduct.increment} ${classesProduct.iconBlock}`}
        >
          <IncrementSvg classesProduct={classesProduct} />
        </div>
      </div>
    </div>
  );
}
