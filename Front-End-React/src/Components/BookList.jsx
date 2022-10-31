import {
  Text,
  Button,
  SimpleGrid,
  HStack,
  Checkbox,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import ModalWrapper from "./ModalWrapper";
import { useEffect, useState } from "react";
import {
  ItemTextConstants,
  StringConstants,
  URLConstants,
} from "../utils/constants";
import { styles } from "../utils/projectStyles";

const BookList = () => {
  const [storedBookList, setStoredBookList] = useState([]);

  //After updating the notes in database, this method will be called to set the
  // booklist stored in the state with updated notes
  const updateBookListNotes = (newBook) => {
    let newBookList = storedBookList.map((oldBook) => {
      if (oldBook.id === newBook.id) {
        return newBook;
      } else return oldBook;
    });
    setStoredBookList(newBookList);
  };

  useEffect(() => {
    axios.get(URLConstants.GET_ALL_BOOKS).then((res) => {
      setStoredBookList(res.data);
    });
  }, []);

  return (
    <div>
      <SimpleGrid columns={2} spacing={10}>
        {storedBookList.map((item) => {
          return (
            <VStack key={item.id} style={styles.bookListCard}>
              <VStack style={{ textAlign: "center", height: "30%" }}>
                <Text fontSize={"2xl"}>{item.bookName}</Text>
              </VStack>
              <VStack style={styles.boxCardDetails}>
                <Text>
                  <Text as="b">{StringConstants.AUTHOR}</Text>
                  {item.authorName}
                </Text>
                <Text>
                  <Text as="b">{StringConstants.NUM_PAGES}</Text>
                  {item.numPages}
                </Text>
                <Text>
                  <Text as="b">{StringConstants.ISBN}</Text>
                  {item.isbn}
                </Text>
                <Checkbox
                  borderColor={"black"}
                  defaultChecked={item.bookCompleted}
                  onChange={(event) => {
                    let updatedBookDetails = {
                      ...item,
                      bookCompleted: event.target.checked,
                    };
                    axios
                      .put(
                        `${URLConstants.UPDATE_BOOK + item.isbn}`,
                        updatedBookDetails
                      )
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((err) => console.log(err));
                  }}
                >
                  {ItemTextConstants.READ}
                </Checkbox>
              </VStack>
              <Spacer />
              <HStack>
                <ModalWrapper
                  updateBookListNotes={updateBookListNotes}
                  bookDetails={item}
                />
                <Button
                  colorScheme={"red"}
                  size={"sm"}
                  //onClick function deletes book from library and database and updates state according
                  // to the modified booklist
                  onClick={() => {
                    axios
                      .delete(`${URLConstants.DELETE_BOOK + item.isbn}`)
                      .then(() => {
                        let newBookArray = storedBookList.filter((obj) => {
                          return obj.isbn !== item.isbn;
                        });
                        setStoredBookList(newBookArray);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  {ItemTextConstants.REMOVE}
                </Button>
              </HStack>
            </VStack>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default BookList;
