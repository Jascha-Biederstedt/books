'use client';
import React, { useState } from 'react';

const AddBook = ({ refreshBooks }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookImageLink, setNewBookImageLink] = useState('');
  const [newBookAmazonLink, setNewBookAmazonLink] = useState('');

  const handleSubmitNewBook = async event => {
    event.preventDefault();

    const res = await fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        title: newBookTitle,
        img: 'https://via.placeholder.com/600/92c952',
        link: 'https://www.amazon.com/dp/B0979MGJ5J',
      }),
    });

    if (res.ok) {
      setNewBookTitle('');
      setModalOpen(false);
      refreshBooks();
    }
  };

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
          <form method='dialog' onSubmit={handleSubmitNewBook}>
            <button
              onClick={() => setModalOpen(false)}
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            >
              ✕
            </button>
            <h3 className='font-bold text-lg mb-4'>Add New Book</h3>
            <div className='flex flex-col items-center gap-4'>
              <input
                type='text'
                placeholder='Enter New Book Title'
                className='input input-bordered w-full max-w-xs'
                value={newBookTitle}
                onChange={event => setNewBookTitle(event.target.value)}
              />
              <input
                type='text'
                placeholder='Enter New Book Image Link'
                className='input input-bordered w-full max-w-xs'
                value={newBookImageLink}
                onChange={event => setNewBookImageLink(event.target.value)}
              />
              <input
                type='text'
                placeholder='Enter New Book Amazon Link'
                className='input input-bordered w-full max-w-xs'
                value={newBookAmazonLink}
                onChange={event => setNewBookAmazonLink(event.target.value)}
              />
              <button type='submit' className='btn btn-primary'>
                Add Book
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AddBook;
