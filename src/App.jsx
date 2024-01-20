import classes from "./App.module.scss";

import Header from "./Components/Header/Header";

export default function App() {
  return (
    <div className={classes.wrapper}>
      <Header container={classes.container} />
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
}
