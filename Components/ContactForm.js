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
} from "@chakra-ui/react";

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<Center bg="#A8A7A7" padding="20px" w="100%">
			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack>
					<input defaultValue="test" {...register("example")} />

					{/* include validation with required or other standard HTML validation rules */}
					<input {...register("exampleRequired", { required: true })} />
					{/* errors will return when field validation fails  */}
					{errors.exampleRequired && <span>This field is required</span>}

					<input type="submit" />
				</VStack>
				{/* register your input into the hook by invoking the "register" function */}
			</form>
		</Center>
	);
};

export default ContactForm;
