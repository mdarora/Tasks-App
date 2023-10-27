import Task from '@/types/TaskInterface';
import {BsTrash} from 'react-icons/bs';
import React, { useContext, useState } from 'react';
import { deleteTask, getTasks, markComplete } from '@/api';
import { TaskContext } from '@/providers/TaskProvider';
interface taskProps {
    task: Task,
    i: number
}

const Task = ({task, i}: taskProps) => {
    const {tasks, setTasks} = useContext(TaskContext);
    const [completeMark, setCompleteMark] = useState(false);

    const handleCompleteMark = (e : any, id:string) => {
        setCompleteMark(e.target.checked);
        if(e.target.checked) markComplete(id);
        setTasks(getTasks());
    }

    const handleDelete = (id : string) => {
        setTasks(deleteTask(id));
    }
    return (
        <tr className={`dark:text-white text-black text-lg transition duration-300 ${task.isCompleted ? 'dark:text-gray-600 text-gray-300 line-through' : ''}`} key={i}>
            <th>{i + 1}</th>
            <td className='text-sky-600'>
                <input onChange={e => handleCompleteMark(e, task.id)} type="checkbox" checked={task.isCompleted ? true : completeMark} className="checkbox" />
            </td>
            <td className='w-full'>{task.text}</td>
            <td className='text-red-600 dark:text-red-800'>
                <BsTrash onClick={() => handleDelete(task.id)} cursor='pointer' size={20} />
            </td>
        </tr>
    )
}

export default Task