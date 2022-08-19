import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        black: '#000000',
        white: '#ffffff',
        lightBlue: '#03A9F4',
        darkBlue: '#0A274B',
        darkGray: '#111922'
    },
    font: {
        weights: {
            bold: 700
        }
    }
};

export const ThemeContextWrapper = ({ children }) => (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
);