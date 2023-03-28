import { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)


    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 200)
    
        return () => {
          clearTimeout(timer)
        }
      }, [value, delay])

      return debouncedValue
}

export default useDebounce