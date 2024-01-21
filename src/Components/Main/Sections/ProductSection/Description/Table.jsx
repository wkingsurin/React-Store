export default function Table({ classesProduct, product }) {
  return (
    <div className={classesProduct.table}>
      <div className={classesProduct.row}>
        <div className={classesProduct.cell}>Category</div>
        <div className={classesProduct.cell}>
          {product.description.category}
        </div>
      </div>
      <div className={classesProduct.row}>
        <div className={classesProduct.cell}>Model</div>
        <div className={classesProduct.cell}>{product.description.model}</div>
      </div>
      <div className={classesProduct.row}>
        <div className={classesProduct.cell}>Gender</div>
        <div className={classesProduct.cell}>{product.description.gender}</div>
      </div>
      <div className={classesProduct.row}>
        <div className={classesProduct.cell}>Season</div>
        <div className={classesProduct.cell}>{product.description.season}</div>
      </div>
      <div className={classesProduct.row}>
        <div className={classesProduct.cell}>Color</div>
        <div className={classesProduct.cell}>{product.description.color}</div>
      </div>
    </div>
  );
}
