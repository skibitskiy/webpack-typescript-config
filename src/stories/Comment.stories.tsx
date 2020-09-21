/// <reference path='../components/App.d.ts' />

import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import Comment from '../components/Comment.tsx';

export default {
    title: 'Components/Comment',
    component: Comment
} as Meta;

const Template: Story<comment> = (args) => <Comment {...args} />

export const Primary = Template.bind({});
Primary.args = {
    author: 'Cometrica Team',
    text: 'Hello!'
};
