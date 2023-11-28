import { NextResponse } from "next/server"

import { analyze } from "@/utils/ai"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { content } = await request.json()
  const user = await getUserByClerkID()
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId: user.id,
      id: params.id,
    },
    data: {
      content,
    },
  })

  const analysis = await analyze(updatedEntry.content)
  const updated = await prisma.analysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    // @ts-ignore
    create: {
      userId: user.id,
      entryId: updatedEntry.id,
      ...analysis,
    },
    // @ts-ignore
    update: analysis,
  })

  return NextResponse.json({ data: { ...updatedEntry, analysis: updated } })
}
