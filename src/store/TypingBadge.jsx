import { useEffect, useState } from 'react'

function TypingBadge({ text, className = "" }) {
  const [displayed, setDisplayed] = useState("")
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
  if (index < text.length) {
    const timeout = setTimeout(() => {
      setDisplayed(prev => prev + text[index])
      setIndex(prev => prev + 1)
    }, 80)
    return () => clearTimeout(timeout)
  } else {
    // pause then restart
    const reset = setTimeout(() => {
      setDisplayed("")
      setIndex(0)
      setDone(false)
    }, 2000)
    return () => clearTimeout(reset)
  }
}, [index, text])

  return (
    <span className={`font-mono text-sm mb-4 inline-block ${className}`}>
      {displayed}
      {!done && <span className="animate-pulse text-red-800">|</span>}
    </span>
  )
}

export default TypingBadge