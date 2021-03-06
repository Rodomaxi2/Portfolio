/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Center, FormControl, FormErrorMessage, Input, VStack, Button } from "@chakra-ui/react";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm();

	const mailHref = useRef();

	const onSubmit = (data) => {
		const email = "rodomaxi2@gmail.com";
		mailHref.current.setAttribute(
			"href",
			`mailto:${email}?subject=${data.name} ${data.email}&body=${data.message}`,
		);
		mailHref.current.click();
	};

	return (
		<Center bg="#6C5B7B" maxW="100%" minH="80vh">
			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack>
					<Center color="white" fontSize="xl">
						Contact me!
					</Center>
					<FormControl isInvalid={errors.name}>
						<Input
							id="inputName"
							textColor="white"
							name="name"
							type="text"
							placeholder="Full Name"
							{...register("name", { required: "This is required" })}
						/>
						<FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.email}>
						<Input
							id="inputEmail"
							textColor="white"
							placeholder="Email"
							{...register("email", {
								pattern: {
									value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: "Invalid email",
								},
							})}
						/>
						<FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.message}>
						<Input
							id="inputMessage"
							textColor="white"
							type="text"
							placeholder="Message"
							{...register("message", { required: "This is required" })}
						/>
						<FormErrorMessage>
							{errors.message && errors.message.message}
						</FormErrorMessage>
					</FormControl>

					<a ref={mailHref} href="mailto:name@mail.com" style={{ display: "none" }}>
						Send mail
					</a>
					<Button isLoading={isSubmitting} type="submit">
						Submit
					</Button>
				</VStack>
			</form>
		</Center>
	);
};

export default ContactForm;
