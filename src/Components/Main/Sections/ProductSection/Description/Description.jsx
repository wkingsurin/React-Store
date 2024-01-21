import Table from "./Table";
import Interaction from "./Interaction/Interaction";

export default function Description({ classesProduct, product }) {
  return (
    <div className={classesProduct.description}>
      <div className={classesProduct.col}>
        <h2 className={classesProduct.name}>{product.name}</h2>
        <Table classesProduct={classesProduct} product={product} />
      </div>
      <div className={classesProduct.col}>
        <div className={classesProduct.price}>
          <span className={classesProduct.currency}>{"$"}</span>
          <span className={classesProduct.value}>{product.price}</span>
        </div>
        <Interaction classesProduct={classesProduct} />
        <button className={classesProduct.buyButton}>To cart</button>
      </div>
    </div>
  );
}
