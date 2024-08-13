import { Meta, StoryObj } from '@storybook/react'
import { IFormRef } from './form'
import { Form } from './index'
import { CustomRule } from './useStore'
import Input from '../Input/input'
import Button from '../Button/button'
import Select from '../Select/select'
import Option from '../Select/option'
import { useRef } from 'react'

const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
  argTypes: {
    name: {
      control: 'text',
      description: '表单名称，会作为表单字段 id 前缀使用',
      type: { name: 'string', required: false },
    },
    initialValues: {
      control: 'object',
      description: '表单默认值，只有初始化以及重置时生效',
      type: { name: 'object', value: {}, required: false },
    },
    children: {
      control: 'text',
      description: '表单的子元素，可以是ReactNode或RenderProps',
      type: { name: 'other', value: 'ReactNode', required: false },
    },
    onFinish: {
      action: 'onFinish',
      description: '提交表单且数据验证成功后回调事件',
      type: { name: 'function', required: false },
    },
    onFinishFailed: {
      action: 'onFinishFailed',
      description: '提交表单且数据验证失败后回调事件',
      type: { name: 'function', required: false },
    },
  },
  subcomponents: { 'FormItem': Form.Item as React.ComponentType<unknown> },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '550px' }}>
        <Story />
      </div>
    ),
  ]
}
export default meta

type Story = StoryObj<typeof meta>

const confirmRules: CustomRule[] = [
  { type: 'string', required: true, min: 3, max: 8 },
  ({ getFieldValue }) => ({
    asyncValidator(rule, value) {
      console.log('the value', getFieldValue('password'))
      console.log(value)
      return new Promise((resolve, reject) => {
        if (value !== getFieldValue('password')) {
          reject('The two passwords that you entered do not match!')
        }
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    }
  })
]

export const BasicForm: Story = {
  render: (args) => {
    return (
      <Form {...args} >
        <Form.Item label='用户名' name='name' rules={[{ type: 'string', required: true, min: 3 }]}>
          <Input />
        </Form.Item>
        <Form.Item label='密码' name='password' rules={[{ type: 'string', required: true, min: 3, max: 8 }]}>
          <Input type="password" />
        </Form.Item>
        <div className='bamboosword-form-submit-area'>
          <Button type="submit" btnType='primary'>登陆</Button>
        </div>
      </Form>
    )
  }
}
BasicForm.storyName = '基本的登录表单'

export const RegisterForm: Story = {
  render: (args) => {
    const initialValues = {
      agreement: false
    }
    return (
      <Form {...args} initialValues={initialValues}>
        <Form.Item label='邮件' name='email' rules={[{ type: 'email', required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label='密码' name='password' rules={[{ type: 'string', required: true, min: 3, max: 8 }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label='性别'
          name='gender'
          rules={[{ type: 'string', required: true }]}
          getValueFromEvent={(e) => e}
          valuePropName='defaultValue'
        >
          <Select placeholder="请选择性别">
            <Option value="男" />
            <Option value="女" />
          </Select>
        </Form.Item>
        <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center' }}>
          <Form.Item
            name='agreement'
            rules={[{ type: 'enum', enum: [true], message: '请同意协议' }]}
            getValueFromEvent={(e) => e.target.checked}
            valuePropName='checked'
          >
            <input type="checkbox" />
          </Form.Item>
          <span className="agree-text">注册即代表你同意<a href='https://cheeseburgertony.github.io'>用户协议</a></span>
        </div>
        <div className='bamboosword-form-submit-area'>
          <Button type="submit" btnType='primary'>登陆</Button>
        </div>
      </Form>
    )
  }
}
RegisterForm.storyName = '注册表单，支持多种Form.Item组件'

export const FullForm: Story = {
  render: (args) => {
    const ref = useRef<IFormRef>(null)
    const resetAll = () => {
      console.log('form ref', ref.current)
      console.log('get value', ref.current?.getFieldValue('username'))
      ref.current?.resetFields()
    }

    return (
      <Form initialValues={{ username: 'bamboosword', agreement: false }} {...args} ref={ref}>
        {({ isValid, isSubmitting }) => (
          <>
            <Form.Item label='用户名' name='username' rules={[{ type: 'email', required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label='密码' name='password' rules={[{ type: 'string', required: true, min: 3, max: 8 }]}>
              <Input type='password' />
            </Form.Item>
            <Form.Item label='重复密码' name='confirmPwd' rules={confirmRules}>
              <Input type='password' />
            </Form.Item>
            <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center' }}>
              <Form.Item
                name='agreement'
                valuePropName='checked'
                getValueFromEvent={(e) => e.target.checked}
                rules={[{ type: 'enum', enum: [true], message: '请同意协议' }]}
              >
                <input type="checkbox" />
              </Form.Item>
              <span className="agree-text">注册即代表你同意<a href='https://cheeseburgertony.github.io'>用户协议</a></span>
            </div>
            <div className='bamboosword-form-submit-area'>
              <Button type="submit" btnType='primary'>登陆 {isSubmitting ? '验证中' : '验证完毕'} {isValid ? '通过😄' : '没通过😢'} </Button>
              <Button type="button" onClick={resetAll}>重置</Button>
            </div>
          </>
        )}
      </Form>
    )
  }
}
FullForm.storyName = '自定义规则，调用表单实例'


