import CloseSvg from "./CloseSvg";

export default function Zoom(props) {
  const classes = props.classes;
  const product = props.product;

  return (
    <div
      className={classes.zoom}
      onClick={(e) => {
        props.onClickZoomedImage(e, props.setZoom);
      }}
    >
      <div className={classes.imageBlock}>
        <img
          src={props.activeImageSrc}
          alt={product.alt}
          className={classes.image}
        />
      </div>
      <button className={classes.closeButton}>
        <CloseSvg classes={classes} />
      </button>
    </div>
  );
}
