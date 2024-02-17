import { VStack, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import BookList from "./BookList";
import HomeBodyContent from "./HomeBodyContent";
import NavigationBar from "./NavigationBar";
import { StringConstants } from "../utils/constants";
import { styles } from "../utils/projectStyles";

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState(StringConstants.HOME);

  //Method to change the current screen based on whether we want to show
  // the booklist or ISBN finder homepage
  const changeScreen = () => {
    if (currentScreen === StringConstants.HOME) {
      setCurrentScreen(StringConstants.BOOKS);
    } else {
      setCurrentScreen(StringConstants.HOME);
    }
  };

  return (
    <div>
      {currentScreen === StringConstants.HOME ? (
        <VStack spacing={10}>
          <Box style={styles.navigationBox} marginBottom={5}>
            <NavigationBar
              currentScreen={currentScreen}
              changeScreen={changeScreen}
            />
          </Box>
          <Text fontSize={"4xl"}>{StringConstants.BOOK_FINDER}</Text>
          <HomeBodyContent />
        </VStack>
      ) : (
        <VStack spacing={10}>
          <Box style={styles.navigationBox}>
            <NavigationBar
              currentScreen={currentScreen}
              changeScreen={changeScreen}
            />
          </Box>
          <Box style={styles.bookListBox}>
            <BookList />
          </Box>
        </VStack>
      )}
    </div>
  );
};

export default Home;
