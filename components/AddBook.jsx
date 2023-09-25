'use client';
import React, { useState } from 'react';

const AddBook = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='text-center mb-12'>
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
          <h3 className='font-bold text-lg mb-4'>Add New Book</h3>
          <input
            type='text'
            placeholder='Enter New Book Title'
            className='input input-bordered w-full max-w-xs mr-4'
          />
          <button type='submit' className='btn btn-primary'>
            Add Book
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default AddBook;
