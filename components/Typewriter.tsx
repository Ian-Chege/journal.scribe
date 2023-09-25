"use client"

import Typewriter from "typewriter-effect"

export const TypewriterTitle = () => {
  const texts = [
    "Your personal space for self-reflection.",
    "Write, track, and relive your life’s journey.",
    "Your story matters, let’s chronicle it together.",
  ]
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(texts[0])
          .pauseFor(2500)
          .deleteAll()
          .pauseFor(1000)
          .typeString(texts[1])
          .pauseFor(2500)
          .deleteAll()
          .pauseFor(1000)
          .typeString(texts[2])
          .pauseFor(2500)
          .deleteAll()
          .pauseFor(1000)
          .start()
      }}
    />
  )
}
