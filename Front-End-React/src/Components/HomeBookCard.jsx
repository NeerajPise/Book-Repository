import { Text, Button, VStack } from "@chakra-ui/react";
import axios from "axios";
import {
  ItemTextConstants,
  StringConstants,
  URLConstants,
} from "./utils/constants";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import { styles } from "./utils/projectStyles";

const HomeBookCard = (props) => {
  const addBookToLibrary = () => {
    delete props.book.exists;
    axios
      .post(`${URLConstants.SAVE_BOOK}`, props.book)
      .then(() => {
        props.addedToLibrary();
        alert(StringConstants.ADDED_TO_LIBRARY_ALERT);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (
    props.book === StringConstants.EMPTY_STRING ||
    props.book === StringConstants.ERROR ||
    props.book === StringConstants.ADDED_TO_LIBRARY
  ) {
    return <></>;
  } else {
    return (
      <VStack style={styles.bookListCard} spacing={10}>
        <VStack style={styles.boxCardHeading}>
          <Text fontSize={"2xl"}>{props.book.bookName}</Text>
        </VStack>
        <VStack style={styles.boxCardDetails} spacing={5}>
          <Text>
            <Text as="b">{StringConstants.AUTHOR}</Text>
            {props.book.authorName}
          </Text>
          <Text>
            <Text as="b">{StringConstants.NUM_PAGES}</Text>
            {props.book.numPages}
          </Text>
          <Text>
            <Text as="b">{StringConstants.ISBN}</Text>
            {props.book.isbn}
          </Text>
        </VStack>
        {props.book.exists && (
          <Button leftIcon={<CheckIcon />} colorScheme={"green"} size={"md"}>
            {ItemTextConstants.LIBRARY}
          </Button>
        )}
        {!props.book.exists && (
          <Button
            leftIcon={<AddIcon />}
            colorScheme={"green"}
            size={"md"}
            onClick={() => {
              addBookToLibrary();
            }}
          >
            {ItemTextConstants.LIBRARY}
          </Button>
        )}
      </VStack>
    );
  }
};

export default HomeBookCard;
