import { NextPage } from "next";
import { useState } from "react";
import { Button, Checkbox, Form, Label } from "semantic-ui-react";
import AuthApiHelper from "../../../api/authApiHelper";
import { AuthPayloadType } from "../../../dataTypes/types";
import { LoginPagePropsType } from "../../../dataTypes/propsTypes";
import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";

const registrationFormSchema = yup.object().shape({
	name: yup.string().required("Name is required"),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Email is required"),
	phone: yup
		.string()
		.min(11, "Phone number has to be minimum 11 characters")
		.required("Phone is required"),
	address: yup
		.string()
		.min(10, "Address has to be minimum 10 characters")
		.required("Address is required"),
	password: yup
		.string()
		.min(6, "Password has to be minimum 6 characters")
		.required("Password is required"),
	password2: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords do not match")
		.min(6, "Password has to be minimum 6 characters")
		.required("Confirm password is required"),
});

const RegisterForm: NextPage<LoginPagePropsType> = ({ setAuthModalOpen }) => {
	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				phone: "",
				address: "",
				password: "",
				password2: "",
			}}
			onSubmit={async (values) => {
				const { password2, ...payload } = values;
				try {
					const isValid = await registrationFormSchema.isValid(values);
					if (isValid) {
						AuthApiHelper("register", payload, setAuthModalOpen);
					}
				} catch (error) {
					console.log(error);
				}
			}}
			validationSchema={registrationFormSchema}
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
						{touched.name && errors.name && (
							<Label pointing="below" color="red">
								{errors.name}
							</Label>
						)}
						<Form.Field>
							<label>Name</label>
							<input
								placeholder="Name"
								name="name"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Field>

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

						{touched.phone && errors.phone && (
							<Label pointing="below" color="red">
								{errors.phone}
							</Label>
						)}
						<Form.Field>
							<label>Phone</label>
							<input
								placeholder="Phone"
								name="phone"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Field>

						{touched.address && errors.address && (
							<Label pointing="below" color="red">
								{errors.address}
							</Label>
						)}
						<Form.Field>
							<label>Address</label>
							<input
								placeholder="Address"
								name="address"
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
								name="password"
								type="password"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Field>

						{touched.password2 && errors.password2 && (
							<Label pointing="below" color="red">
								{errors.password2}
							</Label>
						)}
						<Form.Field>
							<label>Confirm Password</label>
							<input
								type="password"
								placeholder="Confirm Password"
								name="password2"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
						</Form.Field>

						<Button
							fluid
							color="green"
							type="submit"
							onClick={() => handleSubmit()}
						>
							Submit
						</Button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default RegisterForm;
