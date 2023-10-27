"use client";
import { TaskContext } from '@/providers/TaskProvider';
import React, { useContext} from 'react';
import Task from './Task';

const TaskList = () => {
    const {tasks, setTasks} = useContext(TaskContext);
  return (
    <div className="overflow-x-auto">
        {tasks.length > 0 ? <>
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Done?</th>
                <th>Tasks</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {tasks.map((task, i) => (
                    <Task key={i} task={task} i={i} />
                ))}
            </tbody>
        </table>

        </> : <>
        <h2 className='text-red-700 text-2xl mt-4'>No Tasks Found!</h2>
        <p>Start adding now</p>
        </>}
    </div>
  )
}

export default TaskList