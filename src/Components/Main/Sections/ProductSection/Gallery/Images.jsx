import ImagesMain from "./ImagesMain";
import Image from "./Image";

export default function Images(props) {
  return (
    <div className={props.classesProduct.images}>
      {props.product.images.map((src, index) => {
        return (
          <Image
            key={index}
            classesProduct={props.classesProduct}
            src={src}
            alt={props.product.name}
          />
        );
      })}
    </div>
  );
}
