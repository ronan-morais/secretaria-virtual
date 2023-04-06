import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://api.github.com/users/ronan-morais');
  const data = await res.json();
  return NextResponse.json({ data })
}