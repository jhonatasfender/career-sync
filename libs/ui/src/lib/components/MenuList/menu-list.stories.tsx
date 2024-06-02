import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MenuList } from './menu-list';

export default {
  title: 'MenuList',
  component: MenuList,
} as Meta;

const Template: Story = (args) => <MenuList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
