# Kanban To-Do List Dashboard

## Overview

This project is a **Kanban-style To-Do List Dashboard** built with React, Redux, React Query, and Material UI. It allows users to manage tasks across four workflow columns: **Backlog**, **In Progress**, **Review**, and **Done**. The app supports full CRUD operations, drag-and-drop task movement, search, and pagination.

---

## Features

### 🗂️ Kanban Board

- Tasks are organized into four columns:
  - **Backlog**
  - **In Progress**
  - **Review**
  - **Done**
- Each column displays its relevant tasks.

### ✏️ Task Management

- **Create Task:** Add new tasks with title, description, and column assignment.
- **Edit Task:** Update task details and move tasks between columns.
- **Delete Task:** Remove tasks from the board.

### 🔄 Drag-and-Drop

- Move tasks between columns using drag-and-drop (powered by `react-beautiful-dnd`).

### 🔍 Search

- Search tasks by title or description using the search bar.

### 📄 Pagination

- Paginate the task list to improve performance and usability (pagination is currently global).

### ⚡ React Query Caching

- Efficient data fetching and caching for tasks using React Query.

### 🖥️ Responsive UI

- Built with Material UI and custom styles for a clean, responsive interface.

---

## Tech Stack

- **Frontend:** React (Vite)
- **State Management:** Redux Toolkit
- **Data Fetching:** React Query
- **UI Library:** Material UI
- **Drag-and-Drop:** react-beautiful-dnd
- **Validation:** Formik + Yup
- **Mock API:** json-server

---

## Getting Started

### 1. Install Dependencies

## 🚀 Getting Started

### 1. Install Dependencies

```
npm install
```

## Start the Mock API

```
npm install -g json-server
json-server --watch [db.json](http://_vscodecontentref_/0) --port 4000
```

## Run the App

```
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── TodoForm.js
│   ├── TodoItem.js
│   └── TodoList.js
├── hooks/
│   └── useTodoState.js
├── App.js
└── index.css
```
## API Schema

```
src/
{
  "id": "string",
  "title": "string",
  "description": "string",
  "column": "backlog | in-progress | review | done"
}
```
## Development Environment

- Node.js v18+
- npm v9+
- Vite for development and building
- ESLint for code linting
- Prettier for code formatting

## Code Quality

- ESLint configuration for code quality
- Prettier for consistent code formatting
- PropTypes for type checking
- Comprehensive component documentation
- Performance optimizations with React.memo and custom hooks
<img src="https://t.bkit.co/w_6803b7c8de4e8.gif" />
## License

MIT
