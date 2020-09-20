import { ThemeProvider } from 'styled-components';
import { themes } from '../../src/helpers';
import React from 'react'

const themeProvider = (Story, context)=>{
  const theme = themes[context.globals.theme];
  return (
    <ThemeProvider theme={theme}>
        <Story {...context} />
    </ThemeProvider>
  )
}

export default themeProvider