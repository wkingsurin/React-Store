import { saveCart } from "../utils";

export const onClickInteraction = (
  e,
  setProductAmount,
  productAmount,
  product,
  cart,
  setCartAlert,
  setCartState
) => {
  let similar = false;

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
      totalPrice: productAmount * product.price,
    });

    const parsedCart = [...JSON.parse(cart)];
    parsedCart.map((product) => {
      if (product.id == productToCart.id) {
        similar = true;
        product.amount = product.amount + productToCart.amount;
      }
    });
    if (!similar) {
      parsedCart.push(productToCart);
    }
    saveCart(parsedCart);

    setCartAlert((alert) => {
      return {
        active: true,
        amount: alert.amount + 1,
      };
    });
    setCartState([]);
  }
};
