import { headerActiveClass } from "../Components/Header/Header";

export const onClickShop = (e, setPage, listRef) => {
  setPage((prev) => "store");
  listRef.current.children[0].classList.add(headerActiveClass);
};
