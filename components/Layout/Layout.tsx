import { NextPage } from "next";
import { useState } from "react";
import { Container } from "semantic-ui-react";
import Navbar from "./Navbar";
import AuthModal from "./AuthModal";

const Layout: NextPage = ({ children }) => {
    const [authModalOpen, setAuthModalOpen] = useState<boolean>(false)
  return (
    <Container fluid>
      <Navbar authModalOpen={authModalOpen} setAuthModalOpen={setAuthModalOpen}/>
      {children}
      <AuthModal authModalOpen={authModalOpen} setAuthModalOpen={setAuthModalOpen}/>
    </Container>
  );
};

export default Layout;
