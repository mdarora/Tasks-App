'use client';
import React, { FormEventHandler, useContext, useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import Modal from './Modal';
import { addTask } from '@/api';
import { TaskContext } from '@/providers/TaskProvider';

const AddTask = () => {
    const {setTasks} = useContext(TaskContext);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [taskInput, setTaskInput] = useState("");

    const handleAddTask : FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault();
        document.querySelector('input')?.blur();

        setTasks(addTask(taskInput));
        setTaskInput('');
        setAddModalOpen(false);
    }

    const openModal = () => {
        setAddModalOpen(true);
        document.querySelector('input')?.focus();
    }
  return (
    <div>
        <button onClick={openModal} className='btn btn-primary text-white w-full'>Add Task <AiOutlinePlus /></button>

        <Modal modalOpen={addModalOpen} setModalOpen={setAddModalOpen}>
            <h1 className='text-left my-2 text-xl font-bold'>Add new task</h1>
            <form onSubmit={handleAddTask} className='flex gap-2'>
                <input autoFocus={true} value={taskInput} onChange={e => setTaskInput(e.target.value)} type="text" placeholder="Type task here" className="input input-bordered w-full dark:bg-slate-800 shadow" required/>
                <button type="submit" className='btn btn-primary'>Add</button>
            </form>
        </Modal>
    </div>
  )
}

export default AddTask