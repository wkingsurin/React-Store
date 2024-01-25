export const onClickInteraction = (e, setProductAmount) => {
  if (!e.target.closest("button")) return;
  const target = e.target.closest("button");

  if (target.id == "decrement") {
    setProductAmount((prev) => {
      if (prev == 1) return prev;
      return prev - 1;
    });
    return;
  }
  if (target.id == "increment") {
    setProductAmount((prev) => prev + 1);
    return;
  }

  console.log(`To cart`);
};
