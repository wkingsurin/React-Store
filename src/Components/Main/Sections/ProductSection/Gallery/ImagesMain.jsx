import Image from "./Image";

export default function ImagesMain(props) {
  return (
    <div className={props.classesProduct.mainImage}>
      <Image
        classesProduct={props.classesProduct}
        src={props.product.src}
        alt={props.product.name}
      />
    </div>
  );
}
