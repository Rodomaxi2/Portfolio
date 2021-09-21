/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.objectOf(PropTypes.any),
};

MyApp.defaultProps = {
	pageProps: {},
};

export default MyApp;
