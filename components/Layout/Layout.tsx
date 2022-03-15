import { NextPage } from "next";
import { useState } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import AuthModal from "./AuthModal/AuthModal";
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Layout: NextPage = ({ children }) => {
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  return (
    <Container fluid>
      <Navbar
        authModalOpen={authModalOpen}
        setAuthModalOpen={setAuthModalOpen}
      />
      {children}
      <AuthModal
        authModalOpen={authModalOpen}
        setAuthModalOpen={setAuthModalOpen}
      />
      <ToastContainer/>
    </Container>
  );
};

export default Layout;
