import Send from '@icons/send.svg';
import Submit from '@icons/submit.svg';
import Button from '@stories/Button/Button';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryFilled: Story = {
  args: {
    label: 'Submit',
    trailingIcon: <Send />,
    className: 'myCustomPrimaryBtn',
    variant: 'filled',
    color: 'primary',
    ariaLabel: 'Submit',
  },
};

export const PrimaryOutlined: Story = {
  args: {
    label: 'Submit',
    trailingIcon: <Send />,
    className: 'myCustomPrimaryBtn',
    variant: 'outline',
    color: 'primary',
    ariaLabel: 'Submit',
  },
};

export const SecondaryFilled: Story = {
  args: {
    label: 'Submit',
    trailingIcon: <Send />,
    className: 'myCustomSecondaryBtn',
    variant: 'filled',
    color: 'secondary',
    ariaLabel: 'Submit',
  },
};

export const SecondaryOutlined: Story = {
  args: {
    label: 'Submit',
    trailingIcon: <Submit />,
    className: 'myCustomSecondaryBtn',
    variant: 'outline',
    color: 'secondary',
    ariaLabel: 'Submit',
  },
};
