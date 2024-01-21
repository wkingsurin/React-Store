import IncrementSvg from "../IncrementSvg";
import DecrementSvg from "../DecrementSvg";

export default function Interaction({ classesProduct, value }) {
  console.log(classesProduct);

  return (
    <div className={classesProduct.interaction}>
      <div className={classesProduct.buttons}>
        <div
          className={`${classesProduct.decrement} ${classesProduct.iconBlock}`}
        >
          <DecrementSvg classesProduct={classesProduct} />
        </div>
        <div className={classesProduct.input}>{1 || value}</div>
        <div
          className={`${classesProduct.increment} ${classesProduct.iconBlock}`}
        >
          <IncrementSvg classesProduct={classesProduct} />
        </div>
      </div>
    </div>
  );
}
