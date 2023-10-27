"use client";
import { getTasks } from '@/api'
import { TaskContext } from '@/providers/TaskProvider';
import React, { useContext, useLayoutEffect, useState } from 'react'

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
                <th>Tasks</th>
                <th>Mark complete</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {tasks.map((task, i) => (
                    <tr key={i}>
                        <th>{i+1}</th>
                        <td className='w-full'>{task.text}</td>
                        <td className='text-sky-600'>Mark</td>
                        <td className='text-red-600'>Delete</td>
                    </tr>
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