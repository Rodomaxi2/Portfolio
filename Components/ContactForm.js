/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import {
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
		<VStack>
			<FormControl onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<Input defaultValue="test" {...register("example")} />

				{/* include validation with required or other standard HTML validation rules */}
				<Input {...register("exampleRequired", { required: true })} />
				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}

				<Input type="submit" />
			</FormControl>
		</VStack>
	);
};

export default ContactForm;
