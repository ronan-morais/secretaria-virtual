// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/utils/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const method = req.method
  const body = req.body

  if (req.method === "GET") {
    
    //const data = await prisma.trabalhos.findMany()
    res.status(200).json({ "data" })

  } else if (req.method === "POST") {
    
    //const data = await prisma.trabalhos.create({data:body})
    res.status(200).json({ "data" })

  } else if (req.method === "PUT") {
    
    //const dataPrisma = await prisma.trabalhos.findMany()
    res.status(200).json({ "dataPrisma" })

  } else if (req.method === "DELETE") {
    
    //const dataPrisma = await prisma.trabalhos.findMany()
    res.status(200).json({ "dataPrisma" })

  }
}
