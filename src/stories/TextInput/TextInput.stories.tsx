import TextInput from '@stories/TextInput/TextInput';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Text producer',
    value: 'Type something',
    errorMessage: 'No numbers allowed',
    className: 'myCutomTextInput',
  },
};
