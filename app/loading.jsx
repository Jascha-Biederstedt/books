import React from 'react';

const LoadingPage = () => {
  return (
    <div className='text-center mt-10'>
      <button className='btn'>
        <span className='loading loading-spinner'></span>
        loading
      </button>
    </div>
  );
};

export default LoadingPage;
