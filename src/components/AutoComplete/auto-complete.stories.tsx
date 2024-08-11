import { Meta, StoryObj } from '@storybook/react'
import { AutoComplete } from './auto-complete'

const meta = {
  title: 'AutoComplete',
  component: AutoComplete,
  tags: ['autodocs']
} satisfies Meta<typeof AutoComplete>
export default meta

type Story = StoryObj<typeof meta>

const arr = ['abc', 'cba', 'acb', 'bca', 'asc', 'asxa', 'asaxa', 'asads', 'dasdsa']
const handleFetch = (query: string) => {
  return arr.filter(item => item.includes(query))
}

export const DefaultAutoComplete: Story | any = {
  render: () => (
    <AutoComplete fetchSuggestions={handleFetch} onSelect={value => console.log('select', value)} />
  )
}