import { Meta, StoryObj } from '@storybook/react'
import { AutoComplete, DataSourceType } from './auto-complete'

interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

interface HeroesProps {
  name: string;
  luckyNum: number;
}

const meta = {
  title: 'AutoComplete',
  component: AutoComplete,
  tags: ['autodocs']
} satisfies Meta<typeof AutoComplete>
export default meta

type Story = StoryObj<typeof meta>


export const SimpleAutoComplete: Story | any = {
  render: (args: any) => {
    const hero = ['Iron Man', 'Spider-Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow', 'Captain Marvel', 'Doctor Strange', 'Black Panther', 'Wolverine']
    const handleFetch = (query: string) => {
      return hero.filter(item => item.includes(query)).map(item => ({ value: item }))
    }
    return (
      <AutoComplete
        {...args}
        fetchSuggestions={handleFetch}
        placeholder="输入漫威超级英雄的英文名试试"
      />
    )
  }
}
SimpleAutoComplete.storyName = '基本的搜索'

export const CustomAutoComplete: Story | any = {
  render: (args: any) => {
    const heroes = [
      { name: 'Iron Man', luckyNum: 6 },
      { name: 'Spider-Man', luckyNum: 12 },
      { name: 'Captain America', luckyNum: 2 },
      { name: 'Thor', luckyNum: 4 },
      { name: 'Hulk', luckyNum: 8 },
      { name: 'Black Widow', luckyNum: 10 },
      { name: 'Captain Marvel', luckyNum: 14 },
      { name: 'Doctor Strange', luckyNum: 16 },
      { name: 'Black Panther', luckyNum: 20 },
      { name: 'Wolverine', luckyNum: 22 }
    ];
    const handleFetch = (query: string) => {
      return heroes.filter(item => item.name.includes(query))
    }
    const renderOption = (item: DataSourceType) => {
      const itemWithNumber = item as DataSourceType<HeroesProps>
      return (
        <>
          <b style={{ marginRight: '10px' }}>Name: {itemWithNumber.name}</b>
          <span>LuckyNumber: {itemWithNumber.luckyNum}</span>
        </>
      )
    }
    return (
      <AutoComplete
        {...args}
        fetchSuggestions={handleFetch}
        placeholder="输入漫威超级英雄的英文名试试,自定义下拉模版"
        renderOption={renderOption}
      />
    )
  }
}
CustomAutoComplete.storyName = '自定义搜索结果模版'

export const AjaxAutoComplete: Story | any = {
  render: (args: any) => {
    const handleFetch = (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(({ items }) => {
          return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
        })
    }
  
    const renderOption = (item: DataSourceType) => {
      const itemWithGithub = item as DataSourceType<GithubUserProps>
      return (
        <>
          <b>Name: {itemWithGithub.value}</b>
          <span>url: {itemWithGithub.url}</span>
        </>
      )
    }
    return (
      <AutoComplete
        {...args}
        fetchSuggestions={handleFetch}
        placeholder="输入Github用户名试试"
        renderOption={renderOption}
      />
    )
  }
}
AjaxAutoComplete.storyName = '支持异步搜索'
