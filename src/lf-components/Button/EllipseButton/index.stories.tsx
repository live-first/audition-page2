import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { EllipseButton } from './index'

const meta = {
  title: 'Components/EllipseButton',
  component: EllipseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EllipseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary_sm: Story = {
  args: {
    children: 'Button',
    size: 'sm',
    disabled: false
  },
}

export const Secondary_md: Story = {
  args: {
    children: 'Button',
    size: 'md',
    disabled: false
  },
}

export const Tertiary_lg: Story = {
  args: {
    children: 'Button',
    size: 'lg',
    disabled: false
  },
}
