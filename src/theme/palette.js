import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
    black,
    white,
    primary: {
        contrastText: white,
        dark: '#2c7d9e',
        main: '#40b4e2',
        light: '#66c3e7',
    },
    secondary: {
        contrastText: white,
        darker: '#0c1e35',
        dark: '#122b4d',
        main: '#1b3e6f',
        light: '#516C91',
    },
    success: {
        contrastText: white,
        dark: '#388e3c',
        main: '#4caf50',
        light: '#81c784',
    },
    info: {
        contrastText: white,
        dark: '#1976d2',
        main: '#2196f3',
        light: '#64b5f6',
    },
    warning: {
        contrastText: white,
        dark: '#f57c00',
        main: '#ff9800',
        light: '#ffb74d',
    },
    error: {
        contrastText: white,
        dark: '#d32f2f',
        main: '#f44336',
        light: '#e57373',
    },
    text: {
        primary: colors.blueGrey[ 900 ],
        secondary: colors.blueGrey[ 600 ],
        link: colors.blue[ 600 ],
        white: '#fff',
    },
    background: {
        default: '#F4F6F8',
        paper: white,
    },
    icon: '#4a4f54',
    divider: colors.grey[ 200 ],
    label: '#a0a0a0',
};
