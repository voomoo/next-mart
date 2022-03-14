import { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import { Button, Checkbox, Container, Form } from "semantic-ui-react";
import Axios from "../../lib/apiConfig";

const LoginPage: NextPage = () => {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      const res = await Axios.post("auth/login", payload);
      console.warn(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            value={payload.email}
            onChange={(e) => setPayload({ ...payload, email: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={payload.password}
            onChange={(e) =>
              setPayload({ ...payload, password: e.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
