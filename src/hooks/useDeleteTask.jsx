import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useDeleteTask() {
	const queryClient = useQueryClient();

	const onSuccess = () => {
		queryClient.invalidateQueries(["tasks"]);
	};

	const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
		mutationFn: (id) => {
			return fetch(`http://localhost:4000/tasks/${id}`, {
				method: "DELETE",
			});
		},
		onSuccess,
		onError() {},
	});

	return {
		isDeletePending,
		deleteTask,
	};
}
