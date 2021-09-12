import { HStack, Image } from "@chakra-ui/react";

const Footer = () => (
	<HStack justifyContent="space-around">
		{/* The default icon size is 1em (16px) */}
		<Image src="/public/telegram-plane.svg" boxSize="60px" />
		<Image src="/public/twitter.svg" boxSize="60px" />
		<Image src="/public/envelope.svg" boxSize="60px" />
	</HStack>
);

export default Footer;
