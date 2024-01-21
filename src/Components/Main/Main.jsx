import classes from "./Main.module.scss";

import PreviewSection from "./Sections/PreviewSection/PreviewSection";
import SneakersSection from "./Sections/SneakersSection/SneakersSection";
import ProductSection from "./Sections/ProductSection/ProductSection";
import CartSection from "./Sections/CartSection/CartSection";

export default function Main({ classContainer, children }) {
  return (
    <main className={classes.main}>
      {/* <PreviewSection
        classSection={classes.section}
        classContainer={classContainer}
        image={{ src: "./sneaker.jpg", alt: "Nike Air Force" }}
      /> */}
      <SneakersSection
        mainClasses={classes}
        classSection={classes.section}
        classContainer={classContainer}
      />
      {/* <ProductSection classes={classes} classContainer={classContainer} /> */}
      {/* <CartSection classes={classes} classContainer={classContainer} /> */}
    </main>
  );
}
