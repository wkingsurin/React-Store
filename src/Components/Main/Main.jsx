import { useState } from "react";

import classes from "./Main.module.scss";

import PreviewSection from "./Sections/PreviewSection/PreviewSection";
import SneakersSection from "./Sections/SneakersSection/SneakersSection";
import ProductSection from "./Sections/ProductSection/ProductSection";
import CartSection from "./Sections/CartSection/CartSection";

import data from "../../data.json";
import dataMini from "../../data-4-items.json";
import { compileString } from "sass";

// Put it in a separate module
export const correctName = (name) => {
  return name.split("-").join(" ");
};

export default function Main({ classContainer, page, setPage }) {
  const [seeProduct, setSeeProduct] = useState(false);

  const onClickTab = (e) => {
    if (e.target.nodeName != "BUTTON") return;
    const target = e.target.closest("li");

    setTab((prev) => target.id);
  };

  const onClickProduct = (e) => {
    if (!e.target.closest("A")) return;
    const target = e.target.closest("a");

    console.log(target);

    setSeeProduct((prev) => {
      return {
        render: true,
        number: target.id - 1,
      };
    });
    setPage((prev) => "");
  };

  return (
    <main className={classes.main}>
      {page === "preview" && (
        <PreviewSection
          classSection={classes.section}
          classContainer={classContainer}
          image={{ src: "./sneaker.jpg", alt: "Nike Air Force" }}
        />
      )}
      {page === "store" && (
        <SneakersSection
          mainClasses={classes}
          classSection={classes.section}
          classContainer={classContainer}
          data={dataMini}
          onClickProduct={onClickProduct}
        />
      )}
      {page === "cart" && (
        <CartSection classes={classes} classContainer={classContainer} />
      )}
      {seeProduct.render && (
        <ProductSection
          classesMain={classes}
          classContainer={classContainer}
          data={data[seeProduct.number]}
          onClick={onClickTab}
        />
      )}
    </main>
  );
}
