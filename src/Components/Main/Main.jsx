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
  // return name.split("-").join(" ");
  return name
    .split("-")
    .map((word) => {
      return word.toLowerCase() == "xxxvii" ? word.toUpperCase() : word;
    })
    .join(" ");
};

export default function Main(props) {
  const onClickTab = (e) => {
    if (e.target.nodeName != "BUTTON") return;
    const target = e.target.closest("li");

    props.setTab((prev) => target.id);
  };

  const onClickList = (e) => {
    if (!e.target.closest("li")) return;
    const target = e.target.closest("li");

    if (!target.id) return;

    props.setShowProduct((prev) => {
      return {
        redner: false,
        id: "",
      };
    });
    props.setPage(target.id);
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
  const onClickShop = (e) => {
    props.setPage((prev) => "store");
  };

  return (
    <main className={classes.main}>
      {props.page === "preview" && (
        <PreviewSection
          classSection={classes.section}
          classContainer={props.classContainer}
          image={{ src: "./sneaker.jpg", alt: "Nike Air Force" }}
          onClickShop={onClickShop}
        />
      )}
      {props.page === "store" && (
        <SneakersSection
          classesMain={classes}
          classSection={classes.section}
          classContainer={props.classContainer}
          data={dataMini}
          onClickProduct={onClickProduct}
          page={props.page}
          setPage={props.setPage}
          onClickList={onClickList}
        />
      )}
      {props.page === "cart" && (
        <CartSection
          classes={classes}
          classContainer={props.classContainer}
          cart={props.cart}
          page={props.page}
          setPage={props.setPage}
          onClickList={onClickList}
        />
      )}
      {props.showProduct.render && (
        <ProductSection
          classesMain={classes}
          classContainer={props.classContainer}
          data={data[props.showProduct.id]}
          onClick={onClickTab}
          cart={props.cart}
          zoom={props.zoom}
          setZoom={props.setZoom}
          page={props.page}
          setPage={props.setPage}
          onClickList={onClickList}
        />
      )}
    </main>
  );
}
