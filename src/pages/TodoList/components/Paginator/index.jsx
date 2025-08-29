import useGetTasks from "@/hooks/useGetTasks";
import { Pagination } from "@mui/material";

export default function Paginator() {
	const { page, setPage, totalPages } = useGetTasks();

	if (!totalPages) return <></>;
	return (
		<Pagination
			count={totalPages}
			page={page}
			onChange={(e, value) => setPage(value)}
			sx={{ width: "fit-content", margin: "auto", mt: 10 }}
			color="primary"
		/>
	);
}
