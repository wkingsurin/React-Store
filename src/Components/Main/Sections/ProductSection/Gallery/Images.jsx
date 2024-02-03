import ImagesMain from "./ImagesMain";
import Image from "./Image";

import { correctName } from "../../../../../utils";

export default function Images(props) {
  return (
    <div
      className={props.classesProduct.images}
      onClick={(e) => props.onClickImage(e)}
      id="images"
    >
      {props.product.images.map((src, index) => {
        const correctAlt = correctName(props.product.name);
        return (
          <Image
            key={index}
            classesProduct={props.classesProduct}
            src={src}
            alt={correctAlt}
            outline={
              index == 0 ? "2px solid var(--actv-img)" : "2px solid transparent"
            }
          />
        );
      })}
    </div>
  );
}
