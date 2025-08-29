import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "todo-list",
	initialState: {
		tasks: [],
		isFormDialogOpen: false,
		currentTask: null,
	},
	reducers: {
		setTasks: (state, payload) => {
			state.tasks = payload.payload;
		},
		openFormDialog: (state) => {
			state.isFormDialogOpen = true;
		},
		closeFormDialog: (state) => {
			state.isFormDialogOpen = false;
			state.currentTask = null;
		},
		setCurrentTask: (state, payload) => {
			state.currentTask = payload.payload;
		},

		updateTaskColumn: (state, action) => {
			const { id, newColumn } = action.payload;
			const task = state.tasks.find((t) => t.id === id);
			if (task) {
				task.column = newColumn;
			}
		},
	},
});

export const {
	setTasks,
	openFormDialog,
	closeFormDialog,
	setCurrentTask,
	updateTaskColumn,
} = counterSlice.actions;

export default counterSlice.reducer;
