import { NextPage } from "next";
import { Button, Container, Dropdown, Grid, Input } from "semantic-ui-react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import styles from "../../styles/layout/navbar.module.css";
import { AuthModalPropsType } from "../../dataTypes/propsTypes";

const Navbar: NextPage<AuthModalPropsType> = ({
  authModalOpen,
  setAuthModalOpen,
}) => {
  const options = [
    { key: "edit", icon: "edit", text: "Edit Post", value: "edit" },
    { key: "delete", icon: "delete", text: "Remove Post", value: "delete" },
    { key: "hide", icon: "hide", text: "Hide Post", value: "hide" },
  ];

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
            <Button
              onClick={() => setAuthModalOpen(!authModalOpen)}
              floated="right"
              color="red"
            >
              Sign in
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
    </nav>
  );
};

export default Navbar;
