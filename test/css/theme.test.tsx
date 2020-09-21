import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import initStoryshots from '@storybook/addon-storyshots';
import { create } from 'react-test-renderer';
import { render, act, cleanup } from '@testing-library/react';
import user from '@testing-library/user-event';

import { StyledApp } from '../../src/components/styledApp';
import App from '../../src/components/App.tsx';
import { themes } from '../../src/helpers.ts';

initStoryshots();

const assertStyles = (element: Element, styles) => {
    Object.entries(styles).forEach(([rule, value]) => {
        expect(element).toHaveStyleRule(rule, value);
    });
};

describe('Styled-Components', () => {
    afterEach(cleanup);

    it('StyledApp', () => {
        const doc = create(
            <StyledApp theme={themes.day}/>
        ).toJSON();
        expect(doc).toHaveStyleRule('color', themes.day.fontColor);
        expect(doc).toHaveStyleRule('background-color', themes.day.mainBgColor);
    });

    it('Theme switch', () => {
        act(() => {
            render(<App />);
        });

        const app = document.querySelector('.app');
        const button = document.querySelector('.theme-switch');

        assertStyles(app, {
            color: themes.day.fontColor,
            'background-color': themes.day.mainBgColor
        });
        assertStyles(button, {
            color: themes.day.fontColor,
            'background-color': themes.day.elementBgColor
        });

        user.click(button);

        assertStyles(app, {
            color: themes.night.fontColor,
            'background-color': themes.night.mainBgColor
        });
        assertStyles(button, {
            color: themes.night.fontColor,
            'background-color': themes.night.elementBgColor
        });
    });
})
