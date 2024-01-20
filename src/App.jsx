import classes from "./App.module.scss";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export default function App() {
  return (
    <div className={classes.wrapper}>
      <Header classContainer={classes.container} />
      <Main classContainer={classes.container} />
      {/* <Footer /> */}
    </div>
  );
}
