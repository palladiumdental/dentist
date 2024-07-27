export const capitalizeFirstLetter = (str: string) => {
  if (str.length === 0) return this;

  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
