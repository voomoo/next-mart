import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { UserProvider } from "../context/useContext";
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	);
}

export default MyApp;
