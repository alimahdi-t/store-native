export const convertToPersianNumbers = (number: string | number) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

export function convertToPersianAndFormat(number: string | number) {
  // Convert the number to a string and format it with commas
  const formattedNumber = number.toLocaleString("en-US");

  // Convert the digits to Persian
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const persianNumber = formattedNumber.replace(
    /\d/g,
    //@ts-ignore
    (digit) => persianDigits[digit],
  );

  return persianNumber;
}

export function calculatePriceAfterDiscount(
  price: number,
  discount: number,
  discountType: "percentage" | "fixed" = "percentage",
) {
  if (discountType === "percentage") {
    return price - (price * discount) / 100;
  } else if (discountType === "fixed") {
    return price - discount;
  } else {
    throw new Error("Invalid discount type");
  }
}

export function calculateDiscount(
  price: number,
  discount: number,
  discountType: "percentage" | "fixed" = "percentage",
) {
  if (discountType === "percentage") {
    return (price * discount) / 100;
  } else if (discountType === "fixed") {
    return discount;
  } else {
    throw new Error("Invalid discount type");
  }
}
