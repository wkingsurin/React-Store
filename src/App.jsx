import { useState } from "react";

import classes from "./App.module.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export default function App() {
  const [page, setPage] = useState("preview");
  const [showProduct, setShowProduct] = useState(false);

  const cart = [
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
    },
  ];

  const onClickPage = (e) => {
    if (!e.target.closest("li")) return;
    const target = e.target.closest("li");

    // Add loading animation
    setTimeout(() => {
      setPage((pageValue) => target.id);
      setShowProduct((showProductValue) => {
        return {
          render: false,
          id: "",
        };
      });
    }, 500);
  };

  return (
    <div className={classes.wrapper}>
      <Header onClick={onClickPage} classContainer={classes.container} />
      <Main
        classContainer={classes.container}
        page={page}
        setPage={setPage}
        showProduct={showProduct}
        setShowProduct={setShowProduct}
        cart={cart}
      />
      {/* <Footer /> */}
    </div>
  );
}
