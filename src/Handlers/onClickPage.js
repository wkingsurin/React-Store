export const onClickPage = (
  e,
  setPage,
  setShowProduct,
  headerActiveClass,
  setCartAlert
) => {
  if (!e.target.closest("li")) return;
  const target = e.target.closest("li");

  if (target.id == "cart") {
    setCartAlert(() => ({ active: false, amount: 0 }));
  }

  // Add loading animation
  setPage(() => {
    const buttons = Array.from(target.closest("ul").children);

    buttons.forEach((button) => {
      if (button.id != target.id) {
        button.classList.remove(headerActiveClass);
        return;
      }
      button.classList.add(headerActiveClass);
    });

    return target.id;
  });
  setShowProduct(() => ({
    render: false,
    id: "",
  }));
};
