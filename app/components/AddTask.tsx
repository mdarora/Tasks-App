'use client';
import React, { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import Modal from './Modal';

const AddTask = () => {
    const [addModalOpen, setAddModalOpen] = useState(false);
  return (
    <div>
        <button onClick={() => setAddModalOpen(true)} className='btn btn-primary w-full'>Add Task <AiOutlinePlus className='font-bold' /></button>
        <Modal addModalOpen={addModalOpen} setAddModalOpen={setAddModalOpen}>
            <h1>MOdal is here</h1>
        </Modal>
    </div>
  )
}

export default AddTask