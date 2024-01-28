import { useRef, useState } from "react";
import { onClickPage } from "./Handlers/index";

import classes from "./App.module.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export default function App() {
  document.addEventListener("keydown", (e) => {
    // for tests
    if (e.key == "F5") {
      localStorage.clear();
    }
    if (e.key == "Escape") {
      setZoom(false);
    }
  });

  const [page, setPage] = useState("preview");
  const [showProduct, setShowProduct] = useState(false);
  const [zoom, setZoom] = useState(false);

  const listRef = useRef(null);

  const cartToJSON = [
    {
      name: "nike-air-jordan-xxxvii",
      src: "./nike-air-jordan-xxxvii-w1/1.jpg",
      id: "1",
      images: [
        "./nike-air-jordan-xxxvii-w1/1.jpg",
        "./nike-air-jordan-xxxvii-w1/2.jpg",
        "./nike-air-jordan-xxxvii-w1/3.jpg",
      ],
      price: 329,
      description: {
        category: "basketball",
        model: "air-jordan-xxxvii",
        gender: "male",
        season: "summer",
        color: "white",
      },
      sizes: [44],
      amount: 1,
    },
    {
      name: "nike-air-jordan-xxxvii",
      src: "./nike-air-jordan-xxxvii-w2/1.jpg",
      id: "2",
      images: [
        "./nike-air-jordan-xxxvii-w2/1.jpg",
        "./nike-air-jordan-xxxvii-w2/2.jpg",
        "./nike-air-jordan-xxxvii-w2/3.jpg",
      ],
      price: 329,
      description: {
        category: "basketball",
        model: "air-jordan-xxxvii",
        gender: "male",
        season: "summer",
        color: "white",
      },
      sizes: [44],
      amount: 1,
    },
  ];
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(cartToJSON));
  }
  const cart = localStorage.getItem("cart");

  return (
    <div className={classes.wrapper}>
      <Header
        listRef={listRef}
        onClick={onClickPage}
        classContainer={classes.container}
        setPage={setPage}
        setShowProduct={setShowProduct}
      />
      <Main
        listRef={listRef}
        classContainer={classes.container}
        page={page}
        setPage={setPage}
        showProduct={showProduct}
        setShowProduct={setShowProduct}
        cart={cart}
        zoom={zoom}
        setZoom={setZoom}
      />
    </div>
  );
}
