import { headerActiveClass } from "../Components/Header/Header";

export const onClickList = (e, setPage, setShowProduct, listRef) => {
  if (!e.target.closest("li")) return;
  const target = e.target.closest("li");

  if (!target.id) return;
  if (target.id == "preview") {
    Array.from(listRef.current.children).forEach((list) =>
      list.classList.remove(headerActiveClass)
    );
  }

  setShowProduct((prev) => {
    return {
      redner: false,
      id: "",
    };
  });
  setPage(target.id);
};
