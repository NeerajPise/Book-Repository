export const getPlainISBN = (ISBN) => {
  let updatedISBN = ISBN.replace(/[^0-9X]/gi, "");
  return updatedISBN;
};

export const validateISBN = (ISBNValidateString) => {
  if (ISBNValidateString.length !== 13) {
    return false;
  }

  if (ISBNValidateString[0] !== "9") {
    return false;
  }

  let digit,
    check,
    i,
    sum = 0;
  for (i = 0; i < 12; i++) {
    digit = parseInt(ISBNValidateString[i]);
    if (i % 2 === 1) {
      sum += 3 * digit;
    } else {
      sum += digit;
    }
  }

  check = (10 - (sum % 10)) % 10;

  // eslint-disable-next-line
  return check == ISBNValidateString[ISBNValidateString.length - 1];
};
