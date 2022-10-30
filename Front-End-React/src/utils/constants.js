export const ItemTextConstants = {
  READ: "Read",
  REMOVE: "Remove",
  SEARCH: "Search",
  ENTER_ISBN: "Enter ISBN Number",
  SAVED: "Saved",
  LIBRARY: "Library",
  BOOK_NOTES: "Book Notes",
  SAVE: "Save",
  NOTES: "Notes",
};

export const StringConstants = {
  HOME: "HOME",
  BOOKS: "BOOKS",
  ERROR: "ERROR",
  NAVIGATION_HOME: "Home",
  NAVIGATION_BOOKS: "My Books",
  ADDED_TO_LIBRARY: "ADDED_TO_LIBRARY",
  ADDED_TO_LIBRARY_ALERT: "Added book to library",
  INVALID_ISBN: "Invalid ISBN",
  EMPTY_STRING: "",
  AUTHOR: "Author: ",
  NUM_PAGES: "Pages: ",
  ISBN: "ISBN: ",
  BOOK_FINDER: "Book Finder",
};

const BASE_URL = `http://127.0.0.1:8080/api/v1`;

export const URLConstants = {
  GET_ALL_BOOKS: `${BASE_URL}/books/`,
  UPDATE_BOOK: `${BASE_URL}/update/`,
  DELETE_BOOK: `${BASE_URL}/delete/`,
  SAVE_BOOK: `${BASE_URL}/save/`,
  GET_BOOK_BY_ISBN: `${BASE_URL}/books/`,
  GOOGLE_API_BASE: `https://www.googleapis.com/books/v1/volumes?q=isbn:`,
};
