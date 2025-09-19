'use client'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, onToggle, onEdit, onDelete }) => {
    if (tasks.length === 0) {
        return <div className="text-center mt-4">No tasks available</div>
    }

    return (
        <ul className="mt-4 space-y-2">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

export default TaskList