'use client';
import React, { FC, ReactNode } from 'react';
import {
	createTheme,
	ThemeProvider,
	responsiveFontSizes,
} from '@mui/material/styles';
import Container from '@mui/material/Container';

declare module '@mui/material/styles' {
	interface Theme {
		tertiary: {
			main: string;
		};
		yellow: {
			main: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		tertiary?: {
			main?: string;
		};
		yellow?: {
			main?: string;
		};
	}
}

let theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
			'Oswald',
			'Gloock',
			'Inter'
		].join(','),
	},
	palette: {
		mode: 'light',
		primary: {
			main: '#08110F',
		},
		secondary: {
			main: '#79881D',
		},
		background: {
			default: '#1D3C2F',
			paper: '#1D3C2F',
		},
		// background: {
		// 	default: '#899BB0',
		// 	paper: '#899BB0',
		// },
		text: {
			primary: '#0D0D0D',
			secondary: '#F9F871',
		},
	},
	tertiary: {
		main: '#e84855',
	},
	yellow: {
		main: '#F9F871',
	},
});
// "#F34213"
theme = responsiveFontSizes(theme);

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>

				{children}
			
		</ThemeProvider>
	);
};

export default Theme;
