import { Formik } from "formik";
import { NextPage } from "next";
import { Button, Form, Label } from "semantic-ui-react";
import AuthApiHelper from "../../../api/authApiHelper";
import { LoginPagePropsType } from "../../../dataTypes/propsTypes";
import * as yup from "yup";

const loginFormSchema = yup.object().shape({
	email: 		yup.string().email("Please enter a valid email").required("Email is required"),
	password: 	yup.string().min(6, "Password has to be minimum 6 characters").required("Password is required")
})

const LoginForm: NextPage<LoginPagePropsType> = ({ setAuthModalOpen }) => {
	return (
		<Formik
			initialValues={{
				email: 		"",
				password: 	"",
			}}
			onSubmit={async (values) => {
				try {
					const isValid = await loginFormSchema.isValid(values)
					if (isValid) {
						AuthApiHelper("login", values, setAuthModalOpen);
					}
				} catch (error) {
					console.log(error)
				}

			}}
			validationSchema={loginFormSchema}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => {
				return (
					<Form>
						{touched.email && errors.email && (
							<Label pointing="below" color="red">
								{errors.email}
							</Label>
						)}
						<Form.Field>
							<label>Email</label>
							<input
								placeholder="Email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Field>

						{touched.password && errors.password && (
							<Label pointing="below" color="red">
								{errors.password}
							</Label>
						)}
						<Form.Field>
							<label>Password</label>
							<input
								placeholder="Password"
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Field>

						<Button fluid color="green" type="submit" onClick={() => handleSubmit()}>
							Submit
						</Button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default LoginForm;
