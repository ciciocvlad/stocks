import {
  AppBar as MAppBar,
  Box,
  Link,
  Container,
  Toolbar,
  useTheme,
  Typography
} from '@mui/material'
import { NavLink } from 'react-router'
import classes from './AppBar.module.css'
import { BackButton } from '../BackButton/BackButton'
import { ActionsMenu } from '../Dropdown/Dropdown'

export const AppBar = ({ colorMode, setColorMode }) => {
  const pages = { Items: '/', Stocks: '/stocks' }
  const { palette } = useTheme()

  return (
    <MAppBar
      className={classes.container}
      sx={{ background: palette.general.header }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <BackButton show={false} />
          <Box className={classes.content}>
            {Object.keys(pages).map(page => (
              <Link
                key={page}
                component={NavLink}
                to={pages[page]}
                underline="none"
                sx={{
                  mx: 2,
                  color: palette.primary.contrastText,
                  opacity: 0.7,
                  '&.active': {
                    opacity: 1
                  }
                }}
              >
                <Typography variant="h1">{page}</Typography>
              </Link>
            ))}
          </Box>
          <ActionsMenu
            checked={colorMode === 'dark'}
            setColorMode={setColorMode}
          />
        </Toolbar>
      </Container>
    </MAppBar>
  )
}
