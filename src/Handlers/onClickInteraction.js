export const onClickInteraction = (
  e,
  setProductAmount,
  productAmount,
  product,
  cart
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
    // const productToCartJSON = JSON.stringify(productToCart);

    const parsedCart = [...JSON.parse(cart)];
    parsedCart.push(productToCart);

    const parsedCartToJSON = JSON.stringify(parsedCart);

    localStorage.setItem("cart", parsedCartToJSON);

    // console.log(`productToCartJSON:`, productToCartJSON);

    // const newCart = JSON.stringify(JSON.parse(cart).push(productToCart));
    // localStorage.setItem("cart", newCart);
    // console.log("product pushed to cart!");

    // console.log(JSON.parse(cart));

    // console.log(newCart);

    // console.log(localStorage.getItem("cart"));
  }
};
