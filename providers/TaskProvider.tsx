"use client";
import { getTasks } from '@/api';
import Task from '@/types/TaskInterface';
import React, {Dispatch, SetStateAction, createContext, useState} from 'react';

interface contextInterface {
    tasks: Task[],
    setTasks: Dispatch<SetStateAction<Task[]>>
}

const defaultValue = {
    tasks: [],
    setTasks: (tasks: Task[]) => {}
} as contextInterface;

export const TaskContext = createContext(defaultValue);



interface taskProviderProps{
    children: React.ReactNode
}
const TaskProvider = ({children} : taskProviderProps) => {
    const [tasks, setTasks] = useState(getTasks());
  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider