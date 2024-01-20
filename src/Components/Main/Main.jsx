import classes from "./Main.module.scss";

import PreviewSection from "./Sections/PreviewSection";
import SneakersSection from "./Sections/SneakersSection";
import ProductSection from "./Sections/ProductSection";
import CartSection from "./Sections/CartSection";

export default function Main({ classContainer, children }) {
  return (
    <main className={classes.main}>
      <PreviewSection
        classes={classes}
        classContainer={classContainer}
        image={{ src: "./sneaker.jpg", alt: "Nike Air Force" }}
      />
      {/* <SneakersSection classes={classes} classContainer={classContainer} /> */}
      {/* <ProductSection classes={classes} classContainer={classContainer} /> */}
      {/* <CartSection classes={classes} classContainer={classContainer} /> */}
    </main>
  );
}
