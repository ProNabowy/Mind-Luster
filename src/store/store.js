import { configureStore } from "@reduxjs/toolkit";
import todo_list from "./slices/todoListSlice";

export default configureStore({
	reducer: {
		todo_list: todo_list,
	},
});
