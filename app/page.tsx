import { auth } from "@clerk/nextjs"
import Link from "next/link"

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? "/journal" : "/new-user"

  return (
    <div className="bg-custom-image w-screen h-screen flex justify-center items-center text-black">
      <div className="w-full max-w-[600px] mx-auto px-4 sm:px-0">
        <h1 className="text-6xl mb-4">Journal.scribe</h1>
        <p className="text-2xl sm:text-2xl text-black/60 mb-4">
          Your personal space for self-reflection. Write, track, and relive your
          life’s journey. Your story matters, let’s chronicle it together.
        </p>
        <div>
          <Link href={href}>
            <button className="bg-cyan-700 px-4 py-2 rounded-lg text-xl">
              Scribe it
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
