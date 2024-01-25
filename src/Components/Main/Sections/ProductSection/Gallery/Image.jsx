import { correctName } from "../../../../../Modules/correctName";

export default function Image(props) {
  const correctAlt = correctName(props.alt);
  return (
    <div className={props.classesProduct.imageBlock}>
      <div className={props.classesProduct.overlay}></div>
      <img
        src={props.src}
        alt={props.correctAlt}
        className={props.classesProduct.image}
      />
    </div>
  );
}
