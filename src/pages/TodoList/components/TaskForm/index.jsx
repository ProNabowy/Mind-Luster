import useTaskForm from "@/hooks/useTaskForm";
import { closeFormDialog } from "@/store/slices/todoListSlice";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { LoadingButton } from "@mui/lab";
import {
	Autocomplete,
	Dialog,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { StyledCloseButton, StyledFormControl } from "../styles";
import { columns } from "../Tasks";

export default function TaskForm({}) {
	const { isFormDialogOpen, currentTask } = useSelector(
		(store) => store.todo_list
	);

	const dispatch = useDispatch();

	const onClose = () => dispatch(closeFormDialog());

	const { formik, isLoading } = useTaskForm();

	return (
		<Dialog open={isFormDialogOpen} onClose={onClose} fullWidth maxWidth="sm">
			<Stack gap={"24px"} padding={"12px"}>
				<Stack
					direction={"row"}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Typography fontWeight={600}>
						{currentTask
							? `Edit task ${currentTask.title.slice(0, 50)}`
							: "Add a new Task"}
					</Typography>

					<StyledCloseButton onClick={onClose}>
						<ClearOutlinedIcon />
					</StyledCloseButton>
				</Stack>

				<StyledFormControl onSubmit={formik.handleSubmit} component={"form"}>
					<TextField
						id="title"
						label="Title"
						name="title"
						onChange={formik.handleChange}
						helperText={formik.touched.title && formik.errors.title}
						value={formik.values.title}
						error={formik.touched.title && Boolean(formik.errors.title)}
						placeholder="Task Title"
					/>
					<TextField
						id="description"
						name="description"
						value={formik.values.description}
						helperText={formik.touched.description && formik.errors.description}
						onChange={formik.handleChange}
						error={
							formik.touched.description && Boolean(formik.errors.description)
						}
						label="Description"
						placeholder="Task Description"
					/>

					<Stack className="has-full-width">
						<Autocomplete
							fullWidth
							options={columns}
							value={formik.values.column}
							onChange={(e, value) => formik.setFieldValue("column", value)}
							renderInput={(params) => (
								<TextField
									{...params}
									error={formik.touched.column && Boolean(formik.errors.column)}
									label="Column"
									helperText={formik.touched.column && formik.errors.column}
								/>
							)}
						/>
					</Stack>

					<LoadingButton
						type="submit"
						loading={isLoading}
						variant="contained"
						className="has-full-width"
					>
						Submit
					</LoadingButton>
				</StyledFormControl>
			</Stack>
		</Dialog>
	);
}
