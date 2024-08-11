import React, { ChangeEvent, KeyboardEvent, memo, ReactElement, useEffect, useRef, useState } from 'react'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon';
import { useClickOutside, useDebounce } from '../../hooks';
import classNames from 'classnames';

interface DataSourceObject {
  value: string
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType | any) => ReactElement
}

export const AutoComplete: React.FC<AutoCompleteProps> = memo((props) => {
  const { fetchSuggestions, onSelect, value, renderOption, ...restProps } = props
  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [highLightIndex, setHighLightIndex] = useState(-1)

  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)

  useClickOutside(componentRef, () => setSuggestions([]))
  const debounceValue = useDebounce(inputValue, 500)
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const res = fetchSuggestions(debounceValue)
      if (res instanceof Promise) {
        setIsLoading(true)
        res.then(data => {
          setIsLoading(false)
          setSuggestions(data)
          console.log(data);
        })
      } else {
        setSuggestions(res)
      }
    } else {
      setSuggestions([])
    }
    setHighLightIndex(-1)
  }, [debounceValue, fetchSuggestions])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    // 触发更新搜索
    triggerSearch.current = true
  }

  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) onSelect(item)
    // 不触发更新搜索
    triggerSearch.current = false
  }

  const hightLightHandle = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) index = suggestions.length - 1
    setHighLightIndex(index)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {

    switch (e.code) {
      case 'Enter':
        if (suggestions[highLightIndex]) handleSelect(suggestions[highLightIndex])
        break
      case 'ArrowUp':
        hightLightHandle(highLightIndex - 1)
        break
      case 'ArrowDown':
        hightLightHandle(highLightIndex + 1)
        break;
      case 'Escape':
        setSuggestions([])
        break
      default:
        break
    }
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generationDropDown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const cnames = classNames('suggestion-item', {
            'item-highlighted': index === highLightIndex
          })
          return (
            <li key={item.value} className={cnames} onClick={e => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    )
  }


  return (
    <div className='bamboosword-auto-complete' ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {isLoading && <ul><Icon icon='spinner' spin /></ul>}
      {suggestions.length > 0 && generationDropDown()}
    </div>
  )
})

export default AutoComplete