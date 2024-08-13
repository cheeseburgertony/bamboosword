import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Alert, { AlertProps } from './alert';

describe('Alert Component', () => {
  const defaultProps: AlertProps = {
    title: 'Test Alert',
  };

  it('should render with default props', () => {
    render(<Alert {...defaultProps} />);
    const alertElement = screen.getByText('Test Alert');
    expect(alertElement).toBeInTheDocument();
    expect(alertElement).toHaveClass('bamboosword-alert-title');
  });

  it('should render with different types', () => {
    const types: AlertProps['type'][] = ['success', 'default', 'danger', 'warning'];
    types.forEach(type => {
      render(<Alert {...defaultProps} type={type} />);
      const alertContainer = screen.getByRole('alert');
      expect(alertContainer).toHaveClass(`bamboosword-alert-${type}`);
    });
  });

  it('should render with description', () => {
    const props: AlertProps = {
      ...defaultProps,
      description: 'This is a description',
    };
    render(<Alert {...props} />);
    const descriptionElement = screen.getByText('This is a description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass('bamboosword-alert-desc');
  });

  it('should have bold-title class when description is provided', () => {
    const props: AlertProps = {
      ...defaultProps,
      description: 'This is a description',
    };
    render(<Alert {...props} />);
    const titleElement = screen.getByText('Test Alert');
    expect(titleElement).toHaveClass('bold-title');
  });

  it('should not have bold-title class when description is not provided', () => {
    render(<Alert {...defaultProps} />);
    const titleElement = screen.getByText('Test Alert');
    expect(titleElement).not.toHaveClass('bold-title');
  });
});