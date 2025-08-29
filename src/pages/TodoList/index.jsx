import { useSelector } from "react-redux";
import { Header, TaskForm, Tasks } from "./components";
import { StyledContainer } from "./styles";

export default function TodoList() {
	const { isFormDialogOpen } = useSelector((store) => store.todo_list);

	return (
		<StyledContainer className="container">
			<Header />

			<Tasks />

			{isFormDialogOpen && <TaskForm />}
		</StyledContainer>
	);
}
