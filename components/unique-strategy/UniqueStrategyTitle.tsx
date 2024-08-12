import React from 'react'
import { TypewriterEffectSmooth } from '../ui/TypewriterEffect'

const UniqueStrategyTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center">
  <TypewriterEffectSmooth
    words={[
      {
        text: "how i get things",
        className:
          "text-center text-2xl md:text-5xl lg:text-6xl uppercase font-bold",
      },
      {
        text: "done",
        className:
          "text-center text-3xl md:text-6xl lg:text-7xl uppercase font-bold text-blue-500 dark:text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-900 italic",
      },
    ]}
    cursorClassName="bg-yellow-500"
  />

</div>
  )
}

export default UniqueStrategyTitle