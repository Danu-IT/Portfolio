import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../store/store'

export const lightTheme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      dark: '#282C33',
      main: '#690486',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      dark: '#fff',
      light: '#282C33',
      main: '#C778DD'
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
    return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
    )
}
