import { Meta, StoryObj } from '@storybook/react'
import { AutoComplete, DataSourceType } from './auto-complete'

const meta = {
  title: 'AutoComplete',
  component: AutoComplete,
  tags: ['autodocs']
} satisfies Meta<typeof AutoComplete>
export default meta

type Story = StoryObj<typeof meta>

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}


const arr = ['abc', 'cba', 'acb', 'bca', 'asc', 'asxa', 'asaxa', 'asads', 'dasdsa']
// const handleFetch = (query: string) => {
//   return arr.filter(item => item.includes(query)).map(item => ({ value: item }))
// }
// const arr2 = [
//   { value: 'abc', number: 1 },
//   { value: 'absaddc', number: 1 },
//   { value: 'aadadbc', number: 1 },
//   { value: 'abdasdasc', number: 1 },
//   { value: 'abasdasc', number: 1 },
//   { value: 'abvsdcsdcsc', number: 1 },
// ]

// const handleFetch = (query: string) => {
//   return arr2.filter(item => item.value.includes(query))
// }

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
}

interface Props {
  item: string;
  number: number;
}

// const renderOption = (item: DataSourceType<Props>) => (
//   <>
//     <h2>Name:{item.value}</h2>
//     <p>Number:{item.number}</p>
//   </>
// )

const renderOption = (item: DataSourceType) => {
  const itemWithGithub = item as DataSourceType<GithubUserProps>
  return (
    <>
      <b>Name: {itemWithGithub.value}</b>
      <span>url: {itemWithGithub.url}</span>
    </>
  )
}

export const DefaultAutoComplete: Story | any = {
  render: (args: any) => (
    <AutoComplete
      {...args}
      fetchSuggestions={handleFetch}
      onSelect={value => console.log('select', value)}
      renderOption={renderOption} />
  )
}