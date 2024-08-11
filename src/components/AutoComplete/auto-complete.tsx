import React, { ChangeEvent, memo, ReactElement, useState } from 'react'
import Input, { InputProps } from '../Input/input'

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[];
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: any) => ReactElement
}

export const AutoComplete: React.FC<AutoCompleteProps> = memo((props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])

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

  const handleClick = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) onSelect(item)
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generationDropDown = () => {
    return (
      <ul>
        {suggestions.map(item => (
          <li key={item.value} onClick={e => handleClick(item)}>
            {renderTemplate(item)}
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