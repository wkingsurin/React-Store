export const onClickPage = (e, setPage, setShowProduct, headerActiveClass) => {
  if (!e.target.closest("li")) return;
  const target = e.target.closest("li");

  // Add loading animation
  setPage((pageValue) => {
    const buttons = Array.from(target.closest("ul").children);

    buttons.forEach((button) => {
      const path = button.querySelector("path");

      if (button.id != target.id) {
        button.classList.remove(headerActiveClass);
        return;
      }
      button.classList.add(headerActiveClass);
    });

    return target.id;
  });
  setShowProduct((showProductValue) => {
    return {
      render: false,
      id: "",
    };
  });
};
