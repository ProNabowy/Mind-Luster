import useGetTasks from "@/hooks/useGetTasks";
import { openFormDialog } from "@/store/slices/todoListSlice";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { InputAdornment, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledButton, StyledHeaderContainer, StyledInput } from "../styles";

export default function Header() {
	const dispatch = useDispatch();

	const [value, setValue] = useState("");

	const { isSuccess } = useGetTasks(value);

	if (!isSuccess) {
		return (
			<StyledHeaderContainer>
				<Typography color="red">Please Run The Server</Typography>
			</StyledHeaderContainer>
		);
	}
	return (
		<StyledHeaderContainer>
			<StyledInput
				placeholder="Search by task title or description"
				onChange={(e) => setValue(e.target.value)}
				value={value}
				slotProps={{
					input: {
						startAdornment: (
							<InputAdornment position="start">
								<SearchSharpIcon />
							</InputAdornment>
						),
					},
				}}
			/>

			<StyledButton
				onClick={() => dispatch(openFormDialog())}
				variant="contained"
			>
				Add Task
			</StyledButton>
		</StyledHeaderContainer>
	);
}
