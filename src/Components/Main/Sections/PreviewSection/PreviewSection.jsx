import FragmentSvg from "../FragmentSvg";
import classes from "./PreviewSection.module.scss";

export default function PreviewSection({
  classSection,
  classContainer,
  image,
  onClickShop,
}) {
  return (
    <section className={classSection}>
      <div className={classContainer}>
        <div className={classes.sectionBlock}>
          <div className={classes.preview}>
            <div className={classes.representing}>
              <div className={classes.fragmentBlock}>
                <FragmentSvg
                  classFragment={classes.fragment}
                  classPath={classes.path}
                />
              </div>
              <h1 className={classes.storeName}>React Store</h1>
              <h2 className={classes.title}>
                The <span className={classes.titleGreen}>best choise</span> for
                your feet
              </h2>
              <button
                onClick={(e) => {
                  onClickShop();
                }}
                className={classes.buyButton}
              >
                Shop
              </button>
            </div>
            <div className={classes.imageBlock}>
              <img className={classes.image} src={image.src} alt={image.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
