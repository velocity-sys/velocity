'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export default function TypingEffect({ text, speed = 50, delay = 0, className = '' }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true)
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          setCurrentIndex(prev => prev + 1)
        } else {
          setIsTyping(false)
        }
      }, speed)

      return () => clearTimeout(timer)
    }

    if (delay > 0 && currentIndex === 0) {
      const delayTimer = setTimeout(startTyping, delay)
      return () => clearTimeout(delayTimer)
    } else {
      return startTyping()
    }
  }, [currentIndex, text, speed, delay])

  return (
    <span className={className}>
      {displayedText}
      {isTyping && currentIndex < text.length && (
        <span className="animate-pulse text-gold-500">|</span>
      )}
    </span>
  )
}