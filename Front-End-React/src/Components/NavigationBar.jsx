import { Box, Button } from "@chakra-ui/react";
import { StringConstants } from "./utils/constants";
import { styles } from "./utils/projectStyles";

const NavigationBar = (props) => {
  let title;

  if (props.currentScreen === StringConstants.HOME) {
    title = StringConstants.NAVIGATION_BOOKS;
  } else {
    title = StringConstants.NAVIGATION_HOME;
  }

  return (
    <div>
      <Box style={styles.navigationButton}>
        <Button
          colorScheme="blue"
          onClick={() => {
            props.changeScreen();
          }}
        >
          {title}
        </Button>
      </Box>
    </div>
  );
};

export default NavigationBar;
