export default function Image(props) {
  return (
    <div className={props.classesProduct.imageBlock}>
      <div className={props.classesProduct.overlay}></div>
      <img
        src={props.src}
        alt={props.correctAlt}
        className={props.classesProduct.image}
        id={"image"}
        style={props.outline && { outline: props.outline }}
      />
    </div>
  );
}
