import { lazy } from "react";
import { useRoutes } from "react-router-dom";

// Pages
const TodoList = lazy((_) => import("../pages/TodoList"));

export default function useHandleRoutes() {
	let routes = useRoutes([
		// This an example of create route
		{ path: "/", element: <TodoList /> },
	]);

	return { routes };
}
