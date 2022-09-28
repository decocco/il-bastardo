import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    <Box minH="calc(100vh - 216px)">{children}</Box>
    <Footer />
  </>
);

export default AppLayout;
