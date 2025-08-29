import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { validationSchema } from "../assets/validation/taskFormValidation";
import { closeFormDialog } from "../store/slices/todoListSlice";

export default function useTaskForm() {
	const { currentTask, tasks } = useSelector((store) => store.todo_list);

	const queryClient = useQueryClient();

	const dispatch = useDispatch();

	const onSuccess = () => {
		queryClient.invalidateQueries(["tasks"]);
		dispatch(closeFormDialog());
	};

	const { mutate: updateTask, isPending } = useMutation({
		mutationFn: (task) => {
			return fetch(`http://localhost:4000/tasks/${task.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(task),
			});
		},
		onSuccess,
		onError() {},
	});

	const { mutate: addTask, isPending: isAddPending } = useMutation({
		mutationFn: (task) => {
			return fetch(`http://localhost:4000/tasks`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(task),
			});
		},
		onSuccess,
		onError() {},
	});

	const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
		mutationFn: (id) => {
			return fetch(`http://localhost:4000/tasks/${id}`, {
				method: "DELETE",
			});
		},
		onSuccess,
		onError() {},
	});

	const onUpdate = (task) => updateTask(task);

	const onStore = (task) => addTask(task);

	const onSubmit = (values) =>
		currentTask ? onUpdate(values) : onStore(values);

	const formik = useFormik({
		initialValues: currentTask || { title: "", description: "", column: "" },
		validationSchema,
		onSubmit: onSubmit,
	});

	return {
		formik,
		isLoading: isPending || isAddPending,
		isDeletePending,
		deleteTask,
	};
}
