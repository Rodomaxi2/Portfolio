import { HStack, Box, Center, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
	<Box h="auto" bg="#355C7D">
		<Center fontSize="22px">Find my social media</Center>
		<HStack justifyContent="space-around">
			{/* The default icon size is 1em (16px) */}
			<Link href="https://t.me/FamousZev" target="_blank">
				<FontAwesomeIcon icon={faTelegramPlane} size="4x" />
			</Link>

			<Link href="https://twitter.com/rodomaxim" target="_blank">
				<FontAwesomeIcon icon={faTwitter} size="4x" />
			</Link>

			<Link href="mailto:rodomaxi2@gmail.com" target="_blank">
				<FontAwesomeIcon icon={faEnvelope} size="4x" />
			</Link>
		</HStack>
	</Box>
);

export default Footer;
