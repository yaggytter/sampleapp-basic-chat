import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import { PlanPullDownMenu } from '@/components/PlanPullDownMenu'
import Image from 'next/image'
import styled from '@emotion/styled'

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src={'/saasus-logo.png'}
            width={126}
            height={41.5}
            alt="logo"
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const PullDownWrapper = styled.div`
  margin-left: auto;
`
