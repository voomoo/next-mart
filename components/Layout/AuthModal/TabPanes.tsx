import { Dispatch, SetStateAction } from "react";
import { Tab } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const TabPanes = (setAuthModalOpen: Dispatch<SetStateAction<boolean>>) => [
	{
		menuItem: "Login",
		render: () => (
			<Tab.Pane>
				<LoginForm setAuthModalOpen={setAuthModalOpen} />
			</Tab.Pane>
		),
	},
	{
		menuItem: "Register",
		render: () => (
			<Tab.Pane>
				<RegisterForm setAuthModalOpen={setAuthModalOpen} />
			</Tab.Pane>
		),
	},
];

export default TabPanes;
