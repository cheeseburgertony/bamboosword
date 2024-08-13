import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form, { FormProps } from './form';

describe('Form Component', () => {
  const defaultProps: FormProps = {
    name: 'testForm',
    initialValues: { username: 'test' },
    onFinish: jest.fn(),
    onFinishFailed: jest.fn(),
  };

  it('should render with default props', () => {
    render(<Form {...defaultProps} />);
    const formElement = screen.getByRole('form');
    expect(formElement).toHaveAttribute('name', 'testForm');
  });

  it('should initialize with correct values', () => {
    render(<Form {...defaultProps} />);
    const formContext = screen.getByRole('form').getAttribute('name');
    expect(formContext).toBe('testForm');
  });

  it('should call onFinish with correct values on successful submit', async () => {
    const onFinish = jest.fn();
    const validateAllFields = jest.fn().mockResolvedValue({
      isValid: true,
      values: { username: 'test' },
      errors: {},
    });

    render(<Form {...defaultProps} onFinish={onFinish} />);
    fireEvent.submit(screen.getByRole('form'));

    expect(validateAllFields).toHaveBeenCalled();
    expect(onFinish).toHaveBeenCalledWith({ username: 'test' });
  });

  it('should call onFinishFailed with correct values and errors on failed submit', async () => {
    const onFinishFailed = jest.fn();
    const validateAllFields = jest.fn().mockResolvedValue({
      isValid: false,
      values: { username: 'test' },
      errors: { },
    });

    render(<Form {...defaultProps} onFinishFailed={onFinishFailed} />);
    fireEvent.submit(screen.getByRole('form'));

    expect(validateAllFields).toHaveBeenCalled();
    expect(onFinishFailed).toHaveBeenCalledWith(
      { username: 'test' },
      { username: [] }
    );
  });

  it('should call render props function with form state', () => {
    const renderProps = jest.fn().mockReturnValue(<div>Form Content</div>);
    render(<Form {...defaultProps}>{renderProps}</Form>);

    expect(renderProps).toHaveBeenCalledWith(expect.objectContaining({
      username: 'test'
    }));
    expect(screen.getByText('Form Content')).toBeInTheDocument();
  });
});