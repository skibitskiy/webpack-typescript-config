import themeProvider from "./decorators/themeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Темка для компонентов',
    defaultValue: 'day',
    toolbar: {
      icon: 'circlehollow',
      items: ['day', 'night'],
    },
  },
};

export const decorators = [themeProvider];
