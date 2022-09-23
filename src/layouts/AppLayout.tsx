import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout: React.FC = ({ children }) => (
  <>
    <Navbar />

    {children}
    <Footer />
  </>
);

export default AppLayout;
