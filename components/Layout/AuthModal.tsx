import { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  Form,
  Modal,
  Tab,
} from "semantic-ui-react";
import Axios from "../../lib/apiConfig";

type AuthModalPropsType = {
  authModalOpen: boolean;
  setAuthModalOpen: Dispatch<SetStateAction<boolean>>;
};

const AuthModal: NextPage<AuthModalPropsType> = ({
  authModalOpen,
  setAuthModalOpen,
}) => {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const [registerPayload, setRgisterPayload] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password1: "",
    password2: "",
  });
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const res = await Axios.post("auth/login", payload);
      console.warn(res);
    } catch (error) {
      console.log(error);
    }
  };
  const panes = [
    {
      menuItem: "Login",
      render: () => (
        <Tab.Pane>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="Email"
                  value={payload.email || ""}
                  onChange={(e) =>
                    setPayload({ ...payload, email: e.target.value })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={payload.password || ""}
                  onChange={(e) =>
                    setPayload({ ...payload, password: e.target.value })
                  }
                />
              </Form.Field>
              <Button fluid color="green" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Register",
      render: () => (
        <Tab.Pane>
          <Container>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input
                  placeholder="Name"
                  value={registerPayload.name}
                  onChange={(e) =>
                    setRgisterPayload({
                      ...registerPayload,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="Email"
                  value={registerPayload.email}
                  onChange={(e) =>
                    setRgisterPayload({
                      ...registerPayload,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Phone</label>
                <input
                  placeholder="Phone"
                  value={registerPayload.phone}
                  onChange={(e) =>
                    setRgisterPayload({
                      ...registerPayload,
                      phone: e.target.value,
                    })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Address</label>
                <input
                  placeholder="Address"
                  value={registerPayload.address}
                  onChange={(e) =>
                    setRgisterPayload({
                      ...registerPayload,
                      address: e.target.value,
                    })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={registerPayload.password1}
                  onChange={(e) =>
                    setRgisterPayload({
                      ...registerPayload,
                      password1: e.target.value,
                    })
                  }
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={registerPayload.password2}
                  onChange={(e) =>
                    setRgisterPayload({
                      ...registerPayload,
                      name: e.target.value,
                    })
                  }
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button fluid color="green" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Tab.Pane>
      ),
    },
  ];
  return (
    <Modal
      size="mini"
      open={authModalOpen}
      dimmer="blurring"
      onClose={() => setAuthModalOpen(false)}
    >
      <Modal.Header>
        <h4>NextMart Welcomes You</h4>
      </Modal.Header>
      <Modal.Content>
        <Tab panes={panes} />
      </Modal.Content>
    </Modal>
  );
};

export default AuthModal;
