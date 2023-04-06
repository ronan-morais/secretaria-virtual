import { NextResponse } from 'next/server';
import { prisma } from '@/db';

export async function GET() {

  const trabalhos = await prisma.trabalhos.findMany()
    
  return NextResponse.json({ trabalhos })
}