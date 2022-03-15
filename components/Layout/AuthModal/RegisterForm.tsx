import { NextPage } from "next";
import { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import AuthApiHelper from "../../../api/authApiHelper";
import { AuthPayloadType } from "../../../dataTypes/types";
import { LoginPagePropsType } from "../../../dataTypes/propsTypes";

const RegisterForm: NextPage<LoginPagePropsType> = ({setAuthModalOpen}) => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password1: "",
    password2: "",
  });
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const registerPayload: AuthPayloadType = {
      name:     payload.name,
      email:    payload.email,
      phone:    payload.phone,
      address:  payload.address,
      password: payload.password1,
    };
    AuthApiHelper("register", registerPayload, setAuthModalOpen);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Name</label>
        <input
          placeholder="Name"
          value={payload.name}
          onChange={(e) =>
            setPayload({
              ...payload,
              name: e.target.value,
            })
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          value={payload.email}
          onChange={(e) =>
            setPayload({
              ...payload,
              email: e.target.value,
            })
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Phone</label>
        <input
          placeholder="Phone"
          value={payload.phone}
          onChange={(e) =>
            setPayload({
              ...payload,
              phone: e.target.value,
            })
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Address</label>
        <input
          placeholder="Address"
          value={payload.address}
          onChange={(e) =>
            setPayload({
              ...payload,
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
          value={payload.password1}
          onChange={(e) =>
            setPayload({
              ...payload,
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
          value={payload.password2}
          onChange={(e) =>
            setPayload({
              ...payload,
              password2: e.target.value,
            })
          }
        />
      </Form.Field>
      <Button fluid color="green" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
