import { Meta, StoryObj } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';

const meta: Meta<MyButtonComponent> = {
  title: 'Components/MyButton',
  component: MyButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    clicked: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<MyButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    disabled: false,
    variant: "danger",
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    disabled: false,
    variant: 'outline',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    disabled: false,
    variant: 'danger',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
    variant: 'primary',
  },
};

export const CustomLabel: Story = {
  args: {
    label: '🔥 Custom Text',
    variant: 'primary',
  },
};
