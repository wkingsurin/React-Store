import ImagesMain from "./ImagesMain";
import Images from "./Images";

export default function Gallery({ classesProduct, product }) {
  return (
    <div className={classesProduct.gallery}>
      <Images classesProduct={classesProduct} product={product} />
      <ImagesMain classesProduct={classesProduct} product={product} />
    </div>
  );
}
