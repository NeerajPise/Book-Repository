import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import HomeBookCard from "./HomeBookCard";
import axios from "axios";
import { getPlainISBN, validateISBN } from "./utils/bookUtils";
import {
  ItemTextConstants,
  StringConstants,
  URLConstants,
} from "./utils/constants";

const HomeBodyContent = () => {
  const [ISBN, setISBN] = useState(StringConstants.EMPTY_STRING);
  const [book, setBook] = useState(StringConstants.EMPTY_STRING);
  const [error, setError] = useState(false);

  const searchBook = () => {
    let ISBNValidateString = getPlainISBN(ISBN);

    if (validateISBN(ISBNValidateString)) {
      let ISBNValidateString = getPlainISBN(ISBN);
      setError(false);

      let url = `${URLConstants.GOOGLE_API_BASE + ISBNValidateString}`;

      axios
        .get(`${URLConstants.GET_BOOK_BY_ISBN + ISBNValidateString}`)
        .then((res) => {
          if (res.data === StringConstants.EMPTY_STRING) {
            axios
              .get(url)
              .then((res) => {
                setBook({
                  authorName: res.data.items[0].volumeInfo.authors[0],
                  bookName: res.data.items[0].volumeInfo.title,
                  numPages: res.data.items[0].volumeInfo.pageCount,
                  isbn: ISBNValidateString,
                  bookCompleted: false,
                  notes: StringConstants.EMPTY_STRING,
                  exists: false,
                });
              })
              .catch(() => {
                setBook(StringConstants.ERROR);
              });
          } else {
            setBook({ ...res.data, exists: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError(true);
      setBook(StringConstants.EMPTY_STRING);
      return;
    }
  };

  const addedToLibrary = () => {
    setBook(StringConstants.ADDED_TO_LIBRARY);
  };

  return (
    <VStack spacing={5}>
      <VStack>
        <Box>
          <InputGroup>
            <InputLeftElement children={<SearchIcon />} />
            <Input
              placeholder={ItemTextConstants.ENTER_ISBN}
              onChange={(event) => setISBN(event.target.value)}
            />
          </InputGroup>
        </Box>
        {error ? (
          <Text color="red" fontSize="md">
            {StringConstants.INVALID_ISBN}
          </Text>
        ) : (
          <></>
        )}
      </VStack>
      <VStack spacing={10}>
        <Button colorScheme={"cyan"} color={"white"} onClick={searchBook}>
          {ItemTextConstants.SEARCH}
        </Button>
        <Box style={{ width: "400px" }}>
          <HomeBookCard book={book} addedToLibrary={addedToLibrary} />
        </Box>
      </VStack>
    </VStack>
  );
};

export default HomeBodyContent;
