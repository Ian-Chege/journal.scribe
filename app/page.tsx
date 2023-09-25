import { auth } from "@clerk/nextjs"
import Link from "next/link"

import { TypewriterTitle } from "@/components/Typewriter"
import { ArrowRight } from "lucide-react"

export default async function Home() {
  const { userId } = await auth()
  let href = userId ? "/journal" : "/new-user"

  return (
    <div className="bg-gradient-to-r grainy from-rose-100 to-teal-100 w-screen h-screen flex justify-center items-center text-black">
      <div className="border-l-8 border-stone-600 w-full max-w-[600px] mx-auto px-4 sm:px-0">
        <div className="pl-4">
          <h1 className=" font-semibold text-6xl mb-4">
            Journal.<span className="text-teal-600 font-bold">scribe</span>
          </h1>
          <div className="text-2xl sm:text-2xl text-black mb-4">
            <TypewriterTitle />
          </div>
          <Link href={href}>
            <button className="flex items-center text-center bg-stone-600 h-10 px-4 rounded-lg text-xl text-white">
              Scribe it
              <ArrowRight className="ml-2 mt-0.5 w-5 h-5" strokeWidth={3} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
