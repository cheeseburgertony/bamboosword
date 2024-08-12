import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import axios from 'axios'
import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Upload, UploadProps } from './upload'

jest.mock('../Icon/icon', () => {
  return (props: any) => {
    return <span onClick={props.onClick}>{props.icon}</span>
  }
})
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const testProps: UploadProps = {
  action: "fakeurl.com",
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onRemove: jest.fn(),
  drag: true
}
const testFile = new File(['xyz'], 'test.png', { type: 'image/png' })

describe('test upload component', () => {
  it('upload process should work fine', async () => {
    render(<Upload {...testProps}>Click to upload</Upload>)
    mockedAxios.post.mockResolvedValue({ data: 'cool' })

    const fileInput = screen.getByTestId('viking-file-input') as HTMLInputElement
    const uploadArea = screen.getByText('Click to upload')

    expect(uploadArea).toBeInTheDocument()
    expect(fileInput).not.toBeVisible()

    // Trigger file upload
    userEvent.upload(fileInput, testFile)

    // Check if spinner appears during upload
    expect(await screen.findByText('spinner')).toBeInTheDocument()

    // Check if file name and success icon appear after upload
    expect(await screen.findByText('test.png')).toBeInTheDocument()
    expect(await screen.findByText('check-circle')).toBeInTheDocument()

    expect(testProps.onSuccess).toHaveBeenCalledWith('cool', expect.objectContaining({
      raw: testFile,
      status: 'success',
      response: 'cool',
      name: 'test.png'
    }))

    expect(testProps.onChange).toHaveBeenCalledWith(expect.objectContaining({
      raw: testFile,
      status: 'success',
      response: 'cool',
      name: 'test.png'
    }))

    // Remove the uploaded file
    const removeIcon = screen.getByText('times')
    userEvent.click(removeIcon)

    expect(screen.queryByText('test.png')).not.toBeInTheDocument()
    expect(testProps.onRemove).toHaveBeenCalledWith(expect.objectContaining({
      raw: testFile,
      status: 'success',
      name: 'test.png'
    }))
  })

  it('drag and drop files should work fine', async () => {
    render(<Upload {...testProps}>Click to upload</Upload>)
    mockedAxios.post.mockResolvedValue({ data: 'cool' })

    const uploadArea = screen.getByText('Click to upload')

    fireEvent.dragOver(uploadArea)
    expect(uploadArea).toHaveClass('is-dragover')

    fireEvent.dragLeave(uploadArea)
    expect(uploadArea).not.toHaveClass('is-dragover')

    fireEvent.drop(uploadArea, {
      dataTransfer: {
        files: [testFile]
      }
    })

    // Check if file name appears after upload
    expect(await screen.findByText('test.png')).toBeInTheDocument()

    expect(testProps.onSuccess).toHaveBeenCalledWith('cool', expect.objectContaining({
      raw: testFile,
      status: 'success',
      response: 'cool',
      name: 'test.png'
    }))
  })
})