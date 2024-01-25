import { useState } from "react";
import { onClickList, onClickProduct, onClickShop } from "../../Handlers/index";

import classes from "./Main.module.scss";

import PreviewSection from "./Sections/PreviewSection/PreviewSection";
import SneakersSection from "./Sections/SneakersSection/SneakersSection";
import ProductSection from "./Sections/ProductSection/ProductSection";
import CartSection from "./Sections/CartSection/CartSection";

import data from "../../data.json";
import dataMini from "../../data-4-items.json";

export default function Main(props) {
  const [productAmount, setProductAmount] = useState(1);

  return (
    <main className={classes.main}>
      {props.page === "preview" && (
        <PreviewSection
          listRef={props.listRef}
          classSection={classes.section}
          classContainer={props.classContainer}
          image={{ src: "./sneaker.jpg", alt: "Nike Air Force" }}
          onClickShop={onClickShop}
          setPage={props.setPage}
        />
      )}
      {props.page === "store" && (
        <SneakersSection
          listRef={props.listRef}
          classesMain={classes}
          classSection={classes.section}
          classContainer={props.classContainer}
          data={dataMini}
          onClickProduct={onClickProduct}
          page={props.page}
          setPage={props.setPage}
          setShowProduct={props.setShowProduct}
          onClickList={onClickList}
        />
      )}
      {props.page === "cart" && (
        <CartSection
          listRef={props.listRef}
          classes={classes}
          classContainer={props.classContainer}
          cart={props.cart}
          page={props.page}
          setPage={props.setPage}
          onClickList={onClickList}
          setShowProduct={props.setShowProduct}
          productAmount={productAmount}
          setProductAmount={setProductAmount}
        />
      )}
      {props.showProduct.render && (
        <ProductSection
          listRef={props.listRef}
          classesMain={classes}
          classContainer={props.classContainer}
          data={data[props.showProduct.id]}
          cart={props.cart}
          zoom={props.zoom}
          setZoom={props.setZoom}
          page={props.page}
          setPage={props.setPage}
          setShowProduct={props.setShowProduct}
          onClickList={onClickList}
          productAmount={productAmount}
          setProductAmount={setProductAmount}
        />
      )}
    </main>
  );
}
