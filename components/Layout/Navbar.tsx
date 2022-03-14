import { NextPage } from "next";
import { Button, Container, Grid, Input } from "semantic-ui-react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import styles from "../../styles/layout/navbar.module.css";
import { Dispatch, SetStateAction } from "react";


type AuthModalPropsType = {
    authModalOpen: boolean;
    setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
  }

const Navbar: NextPage<AuthModalPropsType> = ({authModalOpen, setAuthModalOpen}) => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Grid centered>
          <Grid.Column width={4} className={styles.logoWrapper}>
            <AiOutlineMenuUnfold size={24} />
            <h3>NextMart</h3>
          </Grid.Column>
          <Grid.Column width={8}>
            <Input
              action={{ icon: "search" }}
              placeholder="Search for products (e.g eggs, milk, potato)"
              fluid
              size="small"
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button onClick={() => setAuthModalOpen(!authModalOpen)} floated="right" color="red">Sign in</Button>
          </Grid.Column>
        </Grid>
      </Container>
    </nav>
  );
};

export default Navbar;
