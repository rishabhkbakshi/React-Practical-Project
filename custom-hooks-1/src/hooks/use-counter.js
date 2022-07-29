import { useEffect, useState } from 'react'

const useCounter = (countVal) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + (countVal))
    }, 1000)

    return () => clearInterval(interval)
  }, [countVal])

  return counter
}

export default useCounter
