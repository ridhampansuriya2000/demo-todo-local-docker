'use client'

const TaskFilter = ({ filter, setFilter }) => {
    return (
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
    )
}

export default TaskFilter