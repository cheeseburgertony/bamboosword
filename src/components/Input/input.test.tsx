import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './input';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

describe('Input component', () => {
  it('should render the Input component', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render with the disabled prop', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should render with different sizes', () => {
    render(<Input size="lg" />);
    expect(screen.getByRole('textbox', { name: /lg/i })).toBeInTheDocument();

    render(<Input size="sm" />);
    expect(screen.getByRole('textbox', { name: /sm/i })).toBeInTheDocument();
  });

  it('should render with an icon', () => {
    render(<Input icon={faCoffee} />);
    expect(screen.getByTestId('icon-wrapper')).toBeInTheDocument();
  });

  it('should render with prepend and append elements', () => {
    render(<Input prepend="http://" append=".com" />);
    expect(screen.getByText('http://')).toBeInTheDocument();
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  it('should call onChange handler', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});