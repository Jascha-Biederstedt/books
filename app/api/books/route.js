import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../../db';

export const GET = async req => {
  await prisma.book.create({
    data: {
      title: 'Prisma book',
      link: 'https://www.amazon.com/dp/B0BXMRB5VF',
      img: 'https://via.placeholder.com/600/92c952',
    },
  });

  return NextResponse.json('test');

  // const books = await prisma.book.findMany();

  // console.log('GET books called');

  // return NextResponse.json(books);
};

export const POST = async req => {
  const { title, link, img } = await req.json();

  const newBook = {
    id: uuidv4(),
    title,
    link,
    img,
  };

  books.push(newBook);

  return NextResponse.json('Book added successfully');
};
