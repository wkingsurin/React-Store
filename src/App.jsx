import { useState } from "react";

import classes from "./App.module.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export default function App() {
  const [page, setPage] = useState("preview");
  const [showProduct, setShowProduct] = useState(false);

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
    console.log(target.id);
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
      />
      {/* <Footer /> */}
    </div>
  );
}
