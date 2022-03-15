import { NextPage } from "next";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import AuthApiHelper from "../../../api/authApiHelper";
import { LoginPagePropsType } from "../../../dataTypes/propsTypes";


const LoginForm: NextPage<LoginPagePropsType> = ({setAuthModalOpen}) => {
    const [payload, setPayload] = useState({email: "", password:""})
    
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    AuthApiHelper('login', payload, setAuthModalOpen)
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          value={payload.email || ""}
          onChange={(e) => setPayload({ ...payload, email: e.target.value })}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={payload.password || ""}
          onChange={(e) => setPayload({ ...payload, password: e.target.value })}
        />
      </Form.Field>
      <Button fluid color="green" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
