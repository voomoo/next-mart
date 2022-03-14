import type { NextPage } from "next";
import { Button, Checkbox, Container, Form } from "semantic-ui-react";

const UserRegistrationPage: NextPage = () => {
  return (
    <Container>
      <Form>
      <Form.Field>
          <label>Name</label>
          <input placeholder="Name" />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input placeholder="Phone" />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <input placeholder="Address" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default UserRegistrationPage;
