import { updateTaskColumn } from "@/store/slices/todoListSlice";
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import Paginator from "../Paginator";
import {
	StyledBodyTableCell,
	StyledHiddenTableCell,
	StyledTableCell,
	StyledTasksContainer,
} from "../styles";
import TaskCard from "../TaskCard";

export const columns = ["backlog", "in-progress", "review", "done"];

export default function Tasks() {
	const { tasks } = useSelector((store) => store.todo_list);
	const dispatch = useDispatch();

	const tasksByColumn = {
		backlog: [],
		"in-progress": [],
		review: [],
		done: [],
	};

	tasks?.forEach((task) => {
		if (tasksByColumn[task.column]) {
			tasksByColumn[task.column].push(task);
		}
	});

	const maxRows = Math.max(
		...Object.values(tasksByColumn).map((arr) => arr.length)
	);

	const onDragEnd = async (result) => {
		const { destination, source, draggableId } = result;
		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		dispatch(
			updateTaskColumn({
				id: draggableId,
				newColumn: destination.droppableId,
				newIndex: destination.index,
			})
		);
	};

	return (
		<StyledTasksContainer>
			<DragDropContext onDragEnd={onDragEnd}>
				<TableContainer>
					<Table
						sx={{ minWidth: 850, tableLayout: "fixed" }}
						aria-label="todo list"
					>
						<TableHead>
							<TableRow>
								{columns.map((col, index) => (
									<StyledTableCell
										key={col}
										hideBorder={index === columns.length - 1}
									>
										{col.replace("-", " ")}
									</StyledTableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								{columns.map((col, idx) => (
									<StyledHiddenTableCell key={idx} />
								))}
							</TableRow>

							{Array.from({ length: maxRows }).map((_, rowIndex) => (
								<TableRow key={rowIndex}>
									{columns.map((col, colIndex) => {
										const task = tasksByColumn[col][rowIndex];
										return (
											<StyledBodyTableCell
												key={col}
												sx={{ width: "300px" }}
												hideBorder={colIndex === columns.length - 1}
											>
												<Droppable droppableId={col} direction="vertical">
													{(provided) => (
														<div
															{...provided.droppableProps}
															ref={provided.innerRef}
															style={{ minHeight: "60px" }}
														>
															{task && (
																<Draggable
																	draggableId={task.id}
																	index={rowIndex}
																>
																	{(provided) => (
																		<div
																			ref={provided.innerRef}
																			{...provided.draggableProps}
																			{...provided.dragHandleProps}
																		>
																			<TaskCard task={task} />
																		</div>
																	)}
																</Draggable>
															)}
															{provided.placeholder}
														</div>
													)}
												</Droppable>
											</StyledBodyTableCell>
										);
									})}
								</TableRow>
							))}
						</TableBody>
					</Table>
					<Paginator />
				</TableContainer>
			</DragDropContext>
		</StyledTasksContainer>
	);
}
