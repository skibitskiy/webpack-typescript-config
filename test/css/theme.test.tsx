import React from 'react';
import 'jest-styled-components';
import { create, act} from 'react-test-renderer';

import { StyledApp, StyledUserInput, StyledButton } from '../../src/components/styledApp';
import { themes } from '../../src/helpers.ts';

test('App. Theme changing check', () => {
    const doc = create(
        <StyledApp theme={themes.day}/>
    ).toJSON();
    expect(doc).toHaveStyleRule('color', themes.day.fontColor);
    expect(doc).toHaveStyleRule('background-color', themes.day.mainBgColor);
});

test('Input. Theme changing check', () => {
    const doc = create(
        <StyledUserInput theme={themes.day}/>
    ).toJSON();
    expect(doc).toHaveStyleRule('color', themes.day.fontColor);
    expect(doc).toHaveStyleRule('background-color', themes.day.elementBgColor);
});

test('Button. Theme changing check', () => {
    const doc = create(
        <StyledButton theme={themes.day} />
    ).toJSON();
    expect(doc).toHaveStyleRule('color', themes.day.fontColor);
    expect(doc).toHaveStyleRule('background-color', themes.day.elementBgColor);
});
