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
      setCartAlert(() => ({
        active: false,
        amount: 0,
      }));
    }
    if (e.key == "Escape") {
      setZoom(false);
    }
  });

  const [page, setPage] = useState("preview");
  const [showProduct, setShowProduct] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [cartAlert, setCartAlert] = useState({
    active: false,
    amount: 0,
  });

  const listRef = useRef(null);

  const cartToJSON = [];

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
        cartAlert={cartAlert}
        setCartAlert={setCartAlert}
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
        cartAlert={cartAlert}
        setCartAlert={setCartAlert}
      />
    </div>
  );
}
