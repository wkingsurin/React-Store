import ImagesMain from "./ImagesMain";
import Images from "./Images";

export default function Gallery(props) {
  const onClickImage = (e) => {
    if (!e.target.closest("#image")) return;

    // clear outline
    Array.from(e.target.closest("#images").children).forEach((image) => {
      image.children[1].style.outline = "2px solid transparent";
    });

    const target = e.target.closest("#image");
    target.style.outline = "2px solid var(--actv-img)";

    props.setActiveImageSrc((src) => target.src);
  };

  return (
    <div className={props.classesProduct.gallery}>
      <Images
        classesProduct={props.classesProduct}
        product={props.product}
        onClickImage={onClickImage}
      />
      <ImagesMain
        classesProduct={props.classesProduct}
        product={props.product}
        onClickMainImage={props.onClickMainImage}
        activeImageSrc={props.activeImageSrc}
        setZoom={props.setZoom}
      />
    </div>
  );
}
