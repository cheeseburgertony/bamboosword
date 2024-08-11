import React, { ChangeEvent, memo, useState } from 'react'
import Input, { InputProps } from '../Input/input'

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => string[];
  onSelect?: (item: string) => void
}

export const AutoComplete: React.FC<AutoCompleteProps> = memo((props) => {
  const { fetchSuggestions, onSelect, value, ...restProps } = props
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      const res = fetchSuggestions(value)
      setSuggestions(res)
      console.log(res);
    } else {
      setSuggestions([])
    }
  }

  const handleClick = (item: string) => {
    setInputValue(item)
    setSuggestions([])
    if (onSelect) onSelect(item)
  }


  const generationDropDown = () => {
    return (
      <ul>
        {suggestions.map(item => (
          <li key={item} onClick={e => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className='bamboosword-auto-complete'>
      <Input
        value={inputValue}
        onChange={e => handleChange(e)}
        {...restProps}
      />
      {suggestions.length > 0 && generationDropDown()}
    </div>
  )
})

export default AutoComplete