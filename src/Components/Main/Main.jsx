import { useState } from "react";

import classes from "./Main.module.scss";

import PreviewSection from "./Sections/PreviewSection/PreviewSection";
import SneakersSection from "./Sections/SneakersSection/SneakersSection";
import ProductSection from "./Sections/ProductSection/ProductSection";
import CartSection from "./Sections/CartSection/CartSection";

import data from "../../data.json";
import dataMini from "../../data-4-items.json";

// Put it in a separate module
export const correctName = (name) => {
  return name.split("-").join(" ");
};

export default function Main(props) {
  const onClickTab = (e) => {
    if (e.target.nodeName != "BUTTON") return;
    const target = e.target.closest("li");

    props.setTab((prev) => target.id);
  };

  const onClickProduct = (e) => {
    if (!e.target.closest("A")) return;
    const target = e.target.closest("a");

    props.setShowProduct((prev) => {
      return {
        render: true,
        id: target.id - 1,
      };
    });
    props.setPage((prev) => "");
  };

  return (
    <main className={classes.main}>
      {props.page === "preview" && (
        <PreviewSection
          classSection={classes.section}
          classContainer={props.classContainer}
          image={{ src: "./sneaker.jpg", alt: "Nike Air Force" }}
        />
      )}
      {props.page === "store" && (
        <SneakersSection
          mainClasses={classes}
          classSection={classes.section}
          classContainer={props.classContainer}
          data={dataMini}
          onClickProduct={onClickProduct}
        />
      )}
      {props.page === "cart" && (
        <CartSection
          classes={classes}
          classContainer={props.classContainer}
          cart={props.cart}
        />
      )}
      {props.showProduct.render && (
        <ProductSection
          classesMain={classes}
          classContainer={props.classContainer}
          data={data[props.showProduct.id]}
          onClick={onClickTab}
          cart={props.cart}
        />
      )}
    </main>
  );
}
