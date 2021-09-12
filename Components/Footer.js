import { HStack, Icon } from "@chakra-ui/react";
import { AtSignIcon, ChatIcon, StarIcon } from "@chakra-ui/icons";

const Footer = () => (
	<HStack>
		{/* The default icon size is 1em (16px) */}
		<Icon as={AtSignIcon} w={30} h={30} />

		{/* Use the `boxSize` prop to change the icon size */}
		<Icon as={ChatIcon} w={30} h={30} />

		{/* Use the `color` prop to change the icon color */}
		<Icon as={StarIcon} w={30} h={30} color="red.500" />
	</HStack>
);

export default Footer;
