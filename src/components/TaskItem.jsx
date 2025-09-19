'use client'
import { useState } from 'react'

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(task.text)

    const validateInput = (input) => {
        const allowedPattern = /^[a-zA-Z0-9 _-]+$/;
        return allowedPattern.test(input) && input.trim().length > 0
    }

    const handleSave = () => {
        if (!validateInput(editText)) {
            alert("Please enter a valid task! (alphanumeric, space, _ and - only)");
            return;
        }
        if (window.confirm("Are you sure you want to update this task?")) {
            onEdit(task.id, editText.trim())
            setIsEditing(false)
        }
    }

    const handleEdit = () => {
        setIsEditing(true)
        setEditText(task.text)
    }

    return (
        <li className="flex flex-col sm:flex-row items-center justify-between bg-gray-100 p-2 rounded-md gap-3">
            <div>
                <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
            </div>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSave()}
                        className="flex-1 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-1 rounded-md"
                    />
                    <button
                        onClick={handleSave}
                        className="text-green-500 hover:underline"
                    >
                        Save
                    </button>
                </>
            ) : (
                <>
                    <span
                        className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''} cursor-pointer`}
                    >
                        {task.text}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={handleEdit}
                            className="text-blue-500 hover:underline"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(task.id)}
                            className="text-red-500 hover:underline"
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </li>
    )
}

export default TaskItem