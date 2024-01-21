import ImagesMain from "./ImagesMain";
import Image from "./Image";

export default function Images({ classesProduct, product }) {
  return (
    <div className={classesProduct.images}>
      {product.images.map((src, index) => {
        return (
          <Image
            key={index}
            classesProduct={classesProduct}
            src={src}
            alt={product.name}
          />
        );
      })}
    </div>
  );
}
