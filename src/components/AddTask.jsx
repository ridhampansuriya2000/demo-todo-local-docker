'use client'

const AddTask = ({ newTask, setNewTask, onAddTask }) => {
    return (
        <div className="flex flex-col gap-2 bg-white p-4 rounded-md border-b border-gray-300">
            <div>Add Task</div>
            <div className="flex gap-3 flex-col sm:flex-row">
                <input
                    placeholder='Enter your task'
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onAddTask()}
                    className="flex-1 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-2 rounded-md"
                />
                <button
                    onClick={onAddTask}
                    disabled={!newTask.trim()}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
                >
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default AddTask