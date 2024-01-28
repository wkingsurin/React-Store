import Image from "./Image";

export default function ImagesMain(props) {
  const activeImageSrc = props.activeImageSrc;

  return (
    <div
      onClick={(e) => props.onClickMainImage(e, props.setZoom)}
      className={props.classesProduct.mainImage}
    >
      <Image
        classesProduct={props.classesProduct}
        src={activeImageSrc}
        alt={props.product.name}
      />
    </div>
  );
}
