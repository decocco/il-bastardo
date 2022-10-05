import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <Box minH="calc(100vh - 216px)" p={{ base: "4vh 3vw", sm: "4vh 7vw" }}>
      {children}
    </Box>
    <Footer />
  </>
);

export default AppLayout;
