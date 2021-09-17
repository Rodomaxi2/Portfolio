/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import {
	Center,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Box,
	Input,
	VStack,
	Button,
} from "@chakra-ui/react";
import { resolveConfig } from "prettier";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	// console.log(watch("name"), watch("email"), watch("message"));
	// emailto:rodomaxi2@gmail.com?subject=${name} ${email}&body=${message}

	return (
		<Center bg="#white" padding="20px" w="100%">
			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack>
					<input placeholder="Full Name" {...register("name", { required: true })} />
					{errors.name && <span>This field is required</span>}

					<input placeholder="Email" {...register("email", { required: true })} />
					{errors.email && <span>This field is required</span>}

					<input placeholder="Message" {...register("message", { required: true })} />
					{errors.message && <span>This field is required</span>}

					<input type="submit" />
				</VStack>
			</form>
		</Center>
	);
};

export default ContactForm;
