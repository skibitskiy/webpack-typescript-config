import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import Operation, { OperationProps } from '../components/Operation';
import { multiply, sum } from '../helpers';

export default {
    title: 'Components/Operation',
    component: Operation,
    argTypes: {
        title: {
            description: 'demoooo',
            control: 'text'
        },
        operation: {
            description: 'joke'
        }
    }
} as Meta;

const Template: Story<OperationProps> = (args) => <Operation {...args} />

export const Multiply = Template.bind({});
Multiply.args = {
    operation: multiply,
    title: 'Multiply'
};

export const Sum = Template.bind({});
Sum.args = {
    operation: sum,
    title: 'Summarize'
};
