/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from "react";
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

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
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

	// console.log(watch("name"), watch("email"), watch("message"));
	// emailto:rodomaxi2@gmail.com?subject=${name} ${email}&body=${message}

	return (
		<Center bg="#white" padding="20px" w="100%">
			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack>
					<input placeholder="Full Name" {...register("name", { required: true })} />
					{errors.name && <span>This field is required</span>}

					<input
						type="email"
						placeholder="Email"
						{...register("email", { required: true })}
					/>
					{errors.email && <span>This field is required</span>}

					<input
						placeholder="Message"
						{...register(
							"message",
							{ required: true },
							{
								pattern: {
									value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: "Ingrese un correo valido",
								},
							},
						)}
					/>
					{errors.message && <span>This field is required</span>}

					<a ref={mailHref} href="mailto:name@mail.com" style={{ display: "none" }}>
						Send mail
					</a>
					<input type="submit" />
				</VStack>
			</form>
		</Center>
	);
};

export default ContactForm;
