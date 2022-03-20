import jwtDecode from "jwt-decode";
import { NextPage } from "next"
import { useEffect, useState } from "react";
import { Button, Menu, Sidebar } from "semantic-ui-react"
import { SideDrawerPropType } from "../../dataTypes/propsTypes";
import { TokenType } from "../../dataTypes/types";
import AdminSideMenu from "./AdminSideMenu";
import CustomerSideMenu from "./CustomerSideMenu";

const SideDrawer: NextPage<SideDrawerPropType> = ({ drawerVisible, authModalOpen, setRole, role }) => {


	useEffect(() => {
		if (typeof window !== "undefined") {
			const token = localStorage.getItem('token')
			if (token) {
				const decodedToken: TokenType = jwtDecode(token as string);
				setRole(decodedToken.role)
				console.log(decodedToken.role)
			}

		}
	}, [authModalOpen])

	const [adminChoice, setAdminChoice] = useState("admin")


	return (

		role === "admin" ?

			<Sidebar
				as={Menu}
				animation='scale down'
				icon='labeled'
				vertical
				visible={drawerVisible}
				style={{ minWidth: "200px" }}
			>
				<Menu.Item>
					<Button fluid color="orange" onClick={() => { adminChoice === "admin" ? setAdminChoice("customer") : setAdminChoice("admin") }}>
						{adminChoice}
					</Button>
				</Menu.Item>
				{adminChoice === "customer" ?
					<CustomerSideMenu /> : <AdminSideMenu />
				}

			</Sidebar>
			:
			<Sidebar
				as={Menu}
				animation='scale down'
				icon='labeled'
				vertical
				visible={drawerVisible}
				style={{ minWidth: "200px" }}
			>
				<CustomerSideMenu />

			</Sidebar>
	)
}

export default SideDrawer;