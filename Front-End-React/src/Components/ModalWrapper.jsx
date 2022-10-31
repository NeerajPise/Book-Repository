import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { ItemTextConstants, URLConstants } from "../utils/constants";

const ModalWrapper = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [notesValue, setNotesValue] = useState(props.bookDetails.notes);

  //Function handles book note modification and updates changes in database
  const updateNotes = () => {
    let updatedBookDetails = { ...props.bookDetails, notes: notesValue };
    props.updateBookListNotes(updatedBookDetails);
    axios
      .put(
        `${URLConstants.UPDATE_BOOK + props.bookDetails.isbn}`,
        updatedBookDetails
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    onClose();
  };

  return (
    <div>
      <Button size={"sm"} onClick={onOpen} colorScheme="green">
        {ItemTextConstants.NOTES}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalContent>
          <ModalHeader>{ItemTextConstants.BOOK_NOTES}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              defaultValue={props.bookDetails.notes}
              onChange={(event) => setNotesValue(event.target.value)}
            ></Textarea>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={updateNotes}>
              {ItemTextConstants.SAVE}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalWrapper;
