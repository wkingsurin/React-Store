export function getCart() {
  return JSON.parse(localStorage.getItem("cart"));
}
export function saveCart(items) {
  localStorage.setItem("cart", JSON.stringify(items));
}
export function clearCart() {
  localStorage.removeItem("cart");
}

export function correctName(name) {
  return name
    .split("-")
    .map((word) => {
      return word.toLowerCase() == "xxxvii" ? word.toUpperCase() : word;
    })
    .join(" ");
}

export function getCurrentCart(cart, parentIdNumber) {
  return cart.filter((item) => item.id != parentIdNumber);
}

export function getItem(target, targetId) {
  return target.closest("#removeItem" + targetId.substring(6));
}

export function getItemId(itemId) {
  return itemId.substring(10);
}

export const cart = JSON.parse(localStorage.getItem("cart"));
