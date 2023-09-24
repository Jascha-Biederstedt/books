'use client';
import React, { useState } from 'react';

const AddBook = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button className='btn' onClick={() => setModalOpen(true)}>
        Add Book
      </button>
      <dialog
        id='my_modal_3'
        className={`modal ${modalOpen ? 'modal-open' : ''}`}
      >
        <div className='modal-box'>
          <form method='dialog'>
            <button
              onClick={() => setModalOpen(false)}
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            >
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Add New Book</h3>
        </div>
      </dialog>
    </>
  );
};

export default AddBook;
