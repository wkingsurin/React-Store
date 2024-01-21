import { correctName } from "../../../Main";

export default function Image(props) {
  const correctAlt = correctName(props.alt);

  return (
    <div className={props.classesProduct.imageBlock}>
      <img
        src={props.src}
        alt={props.correctAlt}
        className={props.classesProduct.image}
      />
    </div>
  );
}
