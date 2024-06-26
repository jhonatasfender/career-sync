import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input } from './input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
