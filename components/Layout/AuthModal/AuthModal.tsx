import { NextPage } from "next";
import { Modal, Tab } from "semantic-ui-react";
import TabPanes from "./TabPanes";
import { AuthModalPropsType } from "../../../dataTypes/propsTypes";

const AuthModal: NextPage<AuthModalPropsType> = ({
	authModalOpen,
	setAuthModalOpen,
}) => {
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
				<Tab panes={TabPanes(setAuthModalOpen)} />
			</Modal.Content>
		</Modal>
	);
};

export default AuthModal;
