import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {

  const trabalhos = await prisma.trabalhos.findMany()

  return NextResponse.json({ trabalhos })
}