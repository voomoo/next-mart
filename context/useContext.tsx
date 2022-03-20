import { createContext, ReactNode, useContext, useState } from "react"

type userContextType = {
	token: string,
	updateToken: any
};

type Props = {
	children: ReactNode;
};

const authContextDefaultValues: userContextType = {
	token: "",
	updateToken: () => { }
};

const UserContext = createContext<userContextType>(authContextDefaultValues);

export function useUserContext() {
	return useContext(UserContext);
}

export function UserProvider({ children }: Props) {
	const [token, setToken] = useState<string>("Demo Token Value")

	const updateToken = (newToken: string) => {
		setToken(newToken)
	}
	const value = {
		token,
		updateToken
	}
	return (
		<>
			<UserContext.Provider value={value}>
				{children}
			</UserContext.Provider>
		</>
	);
}