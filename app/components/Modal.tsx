import React from 'react';

interface modalProps {
    addModalOpen: boolean,
    setAddModalOpen: (open: boolean) => void,
    children: React.ReactNode
}

const Modal : React.FC<modalProps> = ({addModalOpen, setAddModalOpen, children}) => {
  return (
    <dialog className={`modal ${addModalOpen ? 'modal-open' : ''}`}>
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={() => setAddModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {children}
        </div>
    </dialog>
  )
}

export default Modal