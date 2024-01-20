import FragmentSvg from "./FragmentSvg";

import { useEffect } from "react";

export default function PreviewSection({ classes, classContainer, image }) {
  return (
    <section className={classes.section}>
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
              <button className={classes.buyButton}>Buy</button>
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
