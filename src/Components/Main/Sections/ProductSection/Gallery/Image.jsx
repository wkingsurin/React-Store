import { correctName } from "../../../Main";

export default function Image({ classesProduct, src, alt }) {
  const correctAlt = correctName(alt);

  return (
    <div className={classesProduct.imageBlock}>
      <img src={src} alt={correctAlt} className={classesProduct.image} />
    </div>
  );
}
