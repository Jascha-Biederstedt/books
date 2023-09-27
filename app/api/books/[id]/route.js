import { NextResponse } from 'next/server';

import books from '@/app/api/books/data.json';

export const DELETE = async (request, { params }) => {
  const id = params.id;

  console.log('id', id);

  return new NextResponse({ 'Book deleted': id });
};
