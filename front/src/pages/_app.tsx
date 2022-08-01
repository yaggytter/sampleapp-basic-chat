import CssBaseline from '@mui/material/CssBaseline'
import { Header } from '@/components/Header'
import styled from '@emotion/styled'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  )
}

const Main = styled.main``
export default MyApp
