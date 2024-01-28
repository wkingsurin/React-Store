import ImagesMain from "./ImagesMain";
import Images from "./Images";

export default function Gallery(props) {
  return (
    <div className={props.classesProduct.gallery}>
      <Images classesProduct={props.classesProduct} product={props.product} />
      <ImagesMain
        classesProduct={props.classesProduct}
        product={props.product}
        onClickMain={props.onClickMain}
      />
    </div>
  );
}
