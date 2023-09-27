import { NextResponse } from 'next/server';

import books from '@/app/api/books/data.json';

export const DELETE = async (request, { params }) => {
  const id = params.id;

  const index = books.findIndex(book => book.id === id);

  if (index !== -1) books.splice(index, 1);

  return new NextResponse({ 'Book deleted': id });
};
