import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
	title: Yup.string()
		.required("Title is required")
		.min(5, "Title must be at least 5 characters"),
	description: Yup.string()
		.required("Description is required")
		.min(5, "Description must be at least 5 characters"),
	column: Yup.string().required("Column is required"),
});
