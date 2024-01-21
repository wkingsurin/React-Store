import classes from "./Main.module.scss";

import PreviewSection from "./Sections/PreviewSection/PreviewSection";
import SneakersSection from "./Sections/SneakersSection/SneakersSection";
import ProductSection from "./Sections/ProductSection/ProductSection";
import CartSection from "./Sections/CartSection/CartSection";

import data from "../../data.json";
import dataMini from "../../data-4-items.json";

export const correctName = (name) => {
  return name.split("-").join(" ");
};

export default function Main({ classContainer, children }) {
  return (
    <main className={classes.main}>
      {/* <PreviewSection
        classSection={classes.section}
        classContainer={classContainer}
        image={{ src: "./sneaker.jpg", alt: "Nike Air Force" }}
      /> */}
      {/* <SneakersSection
        mainClasses={classes}
        classSection={classes.section}
        classContainer={classContainer}
        data={dataMini}
      /> */}
      <ProductSection
        classesMain={classes}
        classContainer={classContainer}
        data={data}
      />
      {/* <CartSection classes={classes} classContainer={classContainer} /> */}
    </main>
  );
}
