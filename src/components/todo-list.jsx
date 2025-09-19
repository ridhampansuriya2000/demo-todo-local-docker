'use client'
import React, { useEffect } from 'react'

const TodoList = () => {
    const [tasks, setTasks] = React.useState([]);
    const [newTask, setNewTask] = React.useState("");
    const [editingTask, setEditingTask] = React.useState(null);
    const [editText, setEditText] = React.useState("");
    const [filter, setFilter] = React.useState("all");

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    useEffect(() => {
        const storedTasks = localStorage.getItem("todo-task");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todo-task", JSON.stringify(tasks));
    }, [tasks]);

    const validateInput = (input) => {
        const allowedPattern = /^[a-zA-Z0-9 _-]+$/;
        return allowedPattern.test(input) && input.trim().length > 0
    }

    const addTask = () => {
        if (!validateInput(newTask)) {
            alert("Please enter a valid task! (alphanumeric, space, _ and - only)");
            return;
        }
        const task = {
            id: Date.now(),
            text: newTask.trim(),
            completed: false,
            createdAt: new Date().toISOString(),
        }
        setTasks((pre) => [...pre, task]);
        setNewTask("");
    }

    const deleteTask = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTasks((pre) => pre.filter((t) => t.id !== id));
        }
    }

    const startEditTask = (task) => {
        setEditingTask(task.id)
        setEditText(task.text)
    }

    const saveEditTask = () => {

        if (!validateInput(editText)) {
            alert("Please enter a valid task! (alphanumeric, space, _ and - only)");
            return;
        }
        const updatedTasks = tasks.map((t) =>
            t.id == editingTask ? { ...t, text: editText.trim() } : t
        );
        setTasks(updatedTasks);
        if (window.confirm("Are you sure you want to update this task?")) {
            const updatedTasks = tasks.map((t) =>
                t.id === editingTask ? { ...t, text: editText.trim() } : t
            );
            setTasks(updatedTasks);
            setEditingTask(null);
            setEditText("");
        }

    }

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <div className="h-4 sticky top-0 bg-gray-50"></div>
            <div className="flex flex-col sticky top-4 gap-2 bg-white p-4 rounded-md border-b border-gray-300">
                <div>Add Task</div>
                <div className="flex gap-3 flex-col sm:flex-row">
                    <input
                        placeholder='Enter your task'
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addTask()}
                        className="flex-1 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-2 rounded-md"
                    />
                    <button
                        onClick={addTask}
                        disabled={!newTask.trim()}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
                    >
                        Add Task
                    </button>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                    <div>Task Filter</div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFilter("all")}
                            className={`px-3 py-1 rounded-md ${filter === "all" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter("active")}
                            className={`px-3 py-1 rounded-md ${filter === "active" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Active
                        </button>
                        <button
                            onClick={() => setFilter("completed")}
                            className={`px-3 py-1 rounded-md ${filter === "completed" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                            Completed
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {filteredTasks.length === 0 ? (
                    <div className="text-center mt-4">No tasks available</div>
                ) : (
                    <ul className="mt-4 space-y-2">
                        {filteredTasks.map((t) => (
                            <li key={t.id} className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-2 rounded-md gap-3">
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={t.completed}
                                        onChange={() => {
                                            const updatedTasks = tasks.map((taskItem) =>
                                                taskItem.id === t.id ? { ...taskItem, completed: !taskItem.completed } : taskItem
                                            );
                                            setTasks(updatedTasks);
                                        }}
                                    />
                                </div>
                                {editingTask === t.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    saveEditTask();
                                                }
                                            }}
                                            className="flex-1 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-1 rounded-md"
                                        />
                                        <button
                                            onClick={saveEditTask}
                                            className="text-green-500 hover:underline"
                                        >
                                            Save
                                        </button>
                                    </>
                                ) : (
                                    <span
                                        className={`flex-1 ${t.completed ? 'line-through text-gray-500' : ''} cursor-pointer`}
                                    >
                                        {t.text}
                                    </span>
                                )}
                                {
                                    editingTask === t.id ?
                                        null
                                        : (
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => startEditTask(t)}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => deleteTask(t.id)}
                                                    className="text-red-500 hover:underline"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )
                                }
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default TodoList;