import Image from "./Image";

export default function ImagesMain({ classesProduct, product }) {
  return (
    <div className={classesProduct.mainImage}>
      <Image
        classesProduct={classesProduct}
        src={product.src}
        alt={product.name}
      />
    </div>
  );
}
