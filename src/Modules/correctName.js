export const correctName = (name) => {
  return name
    .split("-")
    .map((word) => {
      return word.toLowerCase() == "xxxvii" ? word.toUpperCase() : word;
    })
    .join(" ");
};
