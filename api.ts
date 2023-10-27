'use client'; 
import Task from "./types/TaskInterface";
import { v4 as uuidv4 } from 'uuid';

export const getTasks = () : Task[]=>{
    const tasks = localStorage.getItem('tasks');
    if (!tasks) {
        localStorage.setItem('tasks', JSON.stringify([]));
        return [];
    }
    return JSON.parse(tasks);

}

export const addTask = (task : string) : Task[]=>{
    const tasks = getTasks();
    const id = uuidv4();

    const newTask: Task = { id, text:task, isCompleted: false};
    tasks.push(newTask);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
}

export const markComplete = (id: string) : Task[]=>{
    const tasks = getTasks();

    const newTasks = tasks.map((task) =>{
        if (task.id === id) {
            task.isCompleted = true;
        }
        return task;
    });

    localStorage.setItem('tasks', JSON.stringify(newTasks));

    return newTasks;
}