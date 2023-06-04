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
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		tertiary?: {
			main?: string;
		};
	}
}

let theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#08110F',
		},
		secondary: {
			main: '#79881D',
		},
		background: {
			default: '#899BB0',
			paper: '#899BB0',
		},
		text: {
			primary: '#0D0D0D',
		},
	},
	tertiary: {
		main: '#e84855',
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
