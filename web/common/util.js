import { useEffect, useRef } from 'react'

export const renderShow = (show, children, empty = null) => {
  if (show) {
    return typeof children === 'function' ? children() : children
  }

  return typeof empty === 'function' ? empty() : empty
}

export const useThrottledEffect = (callback, delay, deps = []) => {
  const lastRan = useRef(Date.now())

  useEffect(() => {
    const handler = setTimeout(function() {
      if (Date.now() - lastRan.current >= delay) {
        callback()
        lastRan.current = Date.now()
      }
    }, delay - (Date.now() - lastRan.current))

    return () => {
      clearTimeout(handler)
    }
  }, [delay, ...deps])
}
