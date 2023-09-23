import { NextResponse } from 'next/server';

import books from '../data.json';

export const GET = async req => {
  const { searchParams } = new URL(req.url);

  console.log(searchParams.get('query'));

  return NextResponse.json(books);
};
