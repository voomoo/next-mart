import Axios from "./apiConfig";
import { AuthPayloadType } from "../dataTypes/types";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction } from "react";
import jwtDecode from "jwt-decode";
import { TokenType } from "../dataTypes/types";

const AuthApiHelper = async (
	authType: 			string,
	payload: 			AuthPayloadType,
	setAuthModalOpen:	Dispatch<SetStateAction<boolean>>
) => {
	try {
		const res = await Axios.post(`auth/${authType}`, payload);
		if (!res.data.success) {
			setAuthModalOpen(false);
			toast.error(res.data.data);
		} else {
			localStorage.setItem("token", res?.data?.data?.token);
			const decodedToken: TokenType = jwtDecode(res.data.data.token);
			localStorage.setItem("id", 		decodedToken.id);
			localStorage.setItem("name", 	decodedToken.name);
			localStorage.setItem("email", 	decodedToken.email);
			localStorage.setItem("phone", 	decodedToken.phone);
			localStorage.setItem("role", 	decodedToken.role);
			setAuthModalOpen(false);
			if (authType === "register") {
				toast.success(`User created for ${decodedToken.name}`);
			} else {
				toast.success(`Login successful for ${decodedToken.name}`);
			}
		}
	} catch (error) {
		console.log(error);
	}
};

export default AuthApiHelper;
