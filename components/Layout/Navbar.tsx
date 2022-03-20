import { NextPage } from "next";
import { Button, Container, Dropdown, Grid, Input } from "semantic-ui-react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import styles from "../../styles/layout/navbar.module.css";
import { NavbarPropsType } from "../../dataTypes/propsTypes";
import { useEffect } from "react";
import { useUserContext } from "../../context/useContext";
import { toast } from "react-toastify";
import Link from "next/link";

const Navbar: NextPage<NavbarPropsType> = ({
	authModalOpen,
	setAuthModalOpen,
	setDrawerVisible,
	drawerVisible,
	setRole
}) => {
	const { token, updateToken } = useUserContext();
	useEffect(() => {
		if (typeof window !== "undefined") {
			updateToken(localStorage.getItem("name"));
		}
	}, [authModalOpen]);

	const handleLogout = () => {
		if (typeof window !== "undefined") {
			toast.warn(`${localStorage.getItem("name")} Logged out `);
			localStorage.clear();
			setRole("customer")
			updateToken("");
		}
	};
	return (
		<nav className={styles.navbar}>
			<Container>
				<Grid centered>
					<Grid.Column width={4} className={styles.logoWrapper}>
						{drawerVisible ? (
							<AiOutlineMenuFold
								style={{ cursor: "pointer" }}
								size={24}
								onClick={() => setDrawerVisible(!drawerVisible)}
							/>
						) : (
							<AiOutlineMenuUnfold
								style={{ cursor: "pointer" }}
								size={24}
								onClick={() => setDrawerVisible(!drawerVisible)}
							/>
						)}
						<Link href="/">
							<h3 style={{ cursor: "pointer" }}>NextMart</h3>
						</Link>
					</Grid.Column>
					<Grid.Column width={8}>
						<Input
							action={{ icon: "search" }}
							placeholder="Search for products (e.g eggs, milk, potato)"
							fluid
							size="small"
						/>
					</Grid.Column>
					<Grid.Column width={4}>
						{token ? (
							<Button.Group color="red">
								<Button>{token}</Button>

								<Dropdown className="button icon" floating trigger={<></>}>
									<Dropdown.Menu>
										<Dropdown.Item text="Profile" icon="user" />
										<Dropdown.Item
											onClick={handleLogout}
											text="Logout"
											icon="sign-out"
										/>
									</Dropdown.Menu>
								</Dropdown>
							</Button.Group>
						) : (
							<Button
								onClick={() => setAuthModalOpen(!authModalOpen)}
								floated="right"
								color="red"
							>
								Sign in
							</Button>
						)}
					</Grid.Column>
				</Grid>
			</Container>
		</nav>
	);
};

export default Navbar;
