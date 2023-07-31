"use client"

import { updatedEntry } from "@/utils/api"
import { useState } from "react"
import { useAutosave } from "react-autosave"

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const updated = await updatedEntry(entry.id, _value)
      setIsLoading(false)
    },
  })
  return (
    <div className="w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      )}
      <textarea
        className="w-full h-full p-8 text-xl outline-none bg-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Editor
