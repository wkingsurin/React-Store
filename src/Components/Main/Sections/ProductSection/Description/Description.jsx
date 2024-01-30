import Table from "./Table";
import Interaction from "./Interaction/Interaction";

export default function Description(props) {
  const classesProduct = props.classesProduct;
  const product = props.product;

  return (
    <div
      onClick={(e) =>
        props.onClickInteraction(
          e,
          props.setProductAmount,
          props.productAmount,
          product,
          props.cart,
          props.setCartAlert
        )
      }
      className={classesProduct.description}
    >
      <div className={classesProduct.col}>
        <h2 className={classesProduct.name}>{props.productName}</h2>
        <Table classesProduct={classesProduct} product={product} />
      </div>
      <div className={classesProduct.col}>
        <div className={classesProduct.price}>
          <span className={classesProduct.currency}>{"$"}</span>
          <span className={classesProduct.value}>{product.price}</span>
        </div>
        <Interaction
          classesProduct={classesProduct}
          amount={props.productAmount}
        />
        <button className={classesProduct.buyButton} id={"toCart"}>
          To cart
        </button>
      </div>
    </div>
  );
}
