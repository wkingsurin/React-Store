export const onClickProduct = (e, setShowProduct, setPage) => {
  if (!e.target.closest("A")) return;
  const target = e.target.closest("a");

  setShowProduct((prev) => {
    return {
      render: true,
      id: target.id - 1,
    };
  });
  setPage((prev) => "");
};
