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
