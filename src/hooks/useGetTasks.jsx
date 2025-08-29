import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../store/slices/todoListSlice";

export default function useGetTasks(searchValue = "") {
	const dispatch = useDispatch();

	const prevTasksRef = useRef([]);

	const [page, setPage] = useState(1);

	const pageSize = 15;

	const {
		data: tasks = [],
		isLoading,
		isError,
		isSuccess,
	} = useQuery({
		queryFn: () =>
			fetch("http://localhost:4000/tasks").then((res) => res.json()),
		queryKey: ["tasks"],
	});

	const filteredTasks = useMemo(() => {
		let result = tasks;
		if (searchValue) {
			result = result.filter(
				(task) =>
					task.title.toLowerCase().includes(searchValue.toLowerCase()) ||
					task.description.toLowerCase().includes(searchValue.toLowerCase())
			);
		}

		return result.sort((a, b) => a.order - b.order);
	}, [tasks, searchValue]);

	const paginatedTasks = useMemo(() => {
		const start = (page - 1) * pageSize;
		return filteredTasks.slice(start, start + pageSize);
	}, [filteredTasks, page]);

	useEffect(() => {
		const prevTasks = prevTasksRef.current;

		const isEqual =
			prevTasks.length === paginatedTasks.length &&
			prevTasks.every((t, i) => t.id === paginatedTasks[i].id);

		if (!isEqual) {
			dispatch(setTasks(paginatedTasks));

			prevTasksRef.current = paginatedTasks;
		}
	}, [paginatedTasks, dispatch]);

	return {
		tasks: paginatedTasks,
		isLoading,
		isError,
		totalPages: Math.ceil(filteredTasks.length / pageSize),
		page,
		setPage,
		isSuccess,
	};
}
