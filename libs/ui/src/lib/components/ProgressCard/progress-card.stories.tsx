import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ProgressCard } from './progress-card';

export default {
  title: 'ProgressCard',
  component: ProgressCard,
} as Meta;

const Template: Story = (args) => <ProgressCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
