export const onClickInteraction = (
  e,
  setProductAmount,
  productAmount,
  product,
  cart,
  setCartAlert
) => {
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

  if (target.id == "toCart") {
    const productToCart = Object.assign(product, {
      amount: productAmount,
      sizes: [44],
    });

    const parsedCart = [...JSON.parse(cart)];
    parsedCart.push(productToCart);

    const parsedCartToJSON = JSON.stringify(parsedCart);

    localStorage.setItem("cart", parsedCartToJSON);

    setCartAlert((alert) => {
      return {
        active: true,
        amount: alert.amount + 1,
      };
    });
  }
};
