'use client'
import { useState, useEffect } from 'react'

const useTasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storedTasks = localStorage.getItem("todo-task")
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("todo-task", JSON.stringify(tasks))
    }, [tasks])

    const validateInput = (input) => {
        const allowedPattern = /^[a-zA-Z0-9 _-]+$/
        return allowedPattern.test(input) && input.trim().length > 0
    }

    const addTask = (text) => {
        if (!validateInput(text)) {
            alert("Please enter a valid task! (alphanumeric, space, _ and - only)")
            return false
        }
        const task = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toISOString(),
        }
        setTasks(prev => [task, ...prev])
        return true
    }

    const toggleTask = (id) => {
        setTasks(prev => prev.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    }

    const editTask = (id, newText) => {
        setTasks(prev => prev.map(task =>
            task.id === id ? { ...task, text: newText } : task
        ))
    }

    const deleteTask = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTasks(prev => prev.filter(task => task.id !== id))
        }
    }

    return {
        tasks,
        addTask,
        toggleTask,
        editTask,
        deleteTask
    }
}

export default useTasks