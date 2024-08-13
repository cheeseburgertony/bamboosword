import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tabs, { TabsProps } from './tabs';
import TabItem from './tab-item';

describe('Tabs Component', () => {
  const defaultProps: TabsProps = {
    defaultIndex: 0,
    className: 'test-class',
    type: 'line',
  };

  it('should render with correct class names based on type prop', () => {
    const { rerender } = render(
      <Tabs {...defaultProps}>
        <TabItem label="Tab 1">Content 1</TabItem>
        <TabItem label="Tab 2">Content 2</TabItem>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toHaveClass('nav-line');

    rerender(
      <Tabs {...defaultProps} type="card">
        <TabItem label="Tab 1">Content 1</TabItem>
        <TabItem label="Tab 2">Content 2</TabItem>
      </Tabs>
    );
    expect(screen.getByRole('tablist')).toHaveClass('nav-card');
  });

  it('should apply the className prop to the main container', () => {
    render(
      <Tabs {...defaultProps}>
        <TabItem label="Tab 1">Content 1</TabItem>
        <TabItem label="Tab 2">Content 2</TabItem>
      </Tabs>
    );
    const tabList = screen.getByRole('tablist');
    expect(tabList).toHaveClass('test-class');
  });

  it('should apply is-active class to the active tab', () => {
    render(
      <Tabs {...defaultProps}>
        <TabItem label="Tab 1">Content 1</TabItem>
        <TabItem label="Tab 2">Content 2</TabItem>
      </Tabs>
    );
    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveClass('is-active');
    expect(tabs[1]).not.toHaveClass('is-active');
  });

  it('should apply disabled class to disabled tabs', () => {
    render(
      <Tabs {...defaultProps}>
        <TabItem label="Tab 1" disabled>Content 1</TabItem>
        <TabItem label="Tab 2">Content 2</TabItem>
      </Tabs>
    );
    const tabs = screen.getAllByRole('tab');
    expect(tabs[0]).toHaveClass('disabled');
    expect(tabs[1]).not.toHaveClass('disabled');
  });

  it('should change active tab on click', () => {
    render(
      <Tabs {...defaultProps}>
        <TabItem label="Tab 1">Content 1</TabItem>
        <TabItem label="Tab 2">Content 2</TabItem>
      </Tabs>
    );
    const tabs = screen.getAllByRole('tab');
    fireEvent.click(tabs[1]);
    expect(tabs[1]).toHaveClass('is-active');
    expect(tabs[0]).not.toHaveClass('is-active');
  });
});