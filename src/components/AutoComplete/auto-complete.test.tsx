import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import AutoComplete, { AutoCompleteProps, DataSourceType } from './auto-complete'

const testProps: AutoCompleteProps = {
  fetchSuggestions: jest.fn((query) => [{ value: 'ab', number: 11 }, { value: 'abc', number: 1 }, { value: 'b', number: 4 }]),
  onSelect: jest.fn(),
  placeholder: 'auto-complete'
}

const testPropsWithCustomRender: AutoCompleteProps = {
  ...testProps,
  renderOption: (item: DataSourceType) => <h1>name: {item.value}</h1>
}

describe('test AutoComplete component', () => {
  it('fetchSuggestions should be called with correct input value', async () => {
    const fetchSuggestions = jest.fn()
    render(<AutoComplete fetchSuggestions={fetchSuggestions} placeholder="test-fetch" />)
    const inputNode = screen.getByPlaceholderText('test-fetch') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(fetchSuggestions).toHaveBeenCalledWith('a')
    })
  })

  it('should trigger onSelect with correct item', async () => {
    const onSelect = jest.fn()
    render(<AutoComplete {...testProps} onSelect={onSelect} />)
    const inputNode = screen.getByPlaceholderText('auto-complete') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(screen.getByText('ab')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText('ab'))
    expect(onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
  })

  it('onChange should be called with correct input value', async () => {
    const onChange = jest.fn()
    render(<AutoComplete {...testProps} onChange={onChange} />)
    const inputNode = screen.getByPlaceholderText('auto-complete') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: 'a' } })
    expect(onChange).toHaveBeenCalledWith('a')
  })

  it('renderOption should be used to display suggestions', async () => {
    render(<AutoComplete {...testPropsWithCustomRender} />)
    const inputNode = screen.getByPlaceholderText('auto-complete-2') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: 'a' } })
    await waitFor(() => {
      expect(screen.getByText('name: ab')).toBeInTheDocument()
    })
  })
})