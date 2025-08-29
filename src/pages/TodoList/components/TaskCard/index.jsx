import useDeleteTask from "@/hooks/useDeleteTask";
import { openFormDialog, setCurrentTask } from "@/store/slices/todoListSlice";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
	StyledActionButton,
	StyledActionContainer,
	StyledCardContainer,
	StyledCardTitle,
} from "../styles";

export default function TaskCard({ task }) {
	const dispatch = useDispatch();
	const { isDeletePending, deleteTask } = useDeleteTask();

	const { title, description, id } = task;

	const onEdit = () => {
		dispatch(openFormDialog());
		dispatch(setCurrentTask(task));
	};

	const onDelete = () => deleteTask(id);

	return (
		<StyledCardContainer>
			<StyledCardTitle component={"h3"}>{title}</StyledCardTitle>
			<Typography>{description}</Typography>

			<StyledActionContainer direction={"row"}>
				<StyledActionButton onClick={onEdit} variant="text">
					<CreateOutlinedIcon />
				</StyledActionButton>
				<StyledActionButton
					loading={isDeletePending}
					onClick={onDelete}
					variant="text"
				>
					<DeleteOutlinedIcon />
				</StyledActionButton>
			</StyledActionContainer>
		</StyledCardContainer>
	);
}
