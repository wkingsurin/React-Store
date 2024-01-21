export default function Table(props) {
  return (
    <div className={props.classesProduct.table}>
      <div className={props.classesProduct.row}>
        <div className={props.classesProduct.cell}>Category</div>
        <div className={props.classesProduct.cell}>
          {props.product.description.category}
        </div>
      </div>
      <div className={props.classesProduct.row}>
        <div className={props.classesProduct.cell}>Model</div>
        <div className={props.classesProduct.cell}>
          {props.product.description.model}
        </div>
      </div>
      <div className={props.classesProduct.row}>
        <div className={props.classesProduct.cell}>Gender</div>
        <div className={props.classesProduct.cell}>
          {props.product.description.gender}
        </div>
      </div>
      <div className={props.classesProduct.row}>
        <div className={props.classesProduct.cell}>Season</div>
        <div className={props.classesProduct.cell}>
          {props.product.description.season}
        </div>
      </div>
      <div className={props.classesProduct.row}>
        <div className={props.classesProduct.cell}>Color</div>
        <div className={props.classesProduct.cell}>
          {props.product.description.color}
        </div>
      </div>
    </div>
  );
}
