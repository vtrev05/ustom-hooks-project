import React, {useState, useEffect} from 'react'
import useDebounce from '../../hooks/useDebounce/useDebounce'

const Debounce = () => {
    const [value, setValue] = useState('')

    const debouncedValue = useDebounce(value, 1500)

    const handleChange = (event) => {
        setValue(event.target.value)
      }

      useEffect(() => {
        // Do fetch here...
        // Triggers when "debouncedValue" changes
      }, [debouncedValue])
    
  return (
    <div>
         <div>
      <p>Valor a tiempo real: {value}</p>
      <p>Valor debounced: {debouncedValue}</p>

      <input type="text" value={value} onChange={handleChange} />
    </div>
    </div>
  )
}

export default Debounce