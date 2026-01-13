import { IconButton, ListItemText, Menu, MenuItem, useTheme } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch'
import classes from './Dropdown.module.css'

export const ActionsMenu = ({
  checked,
  setColorMode,
  showFilters,
  toggleFilters
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { palette } = useTheme()

  const handleClick = event => setAnchorEl(event.currentTarget)
  const handleChange = event => setColorMode(event ? 'dark' : 'light')

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? 'actions-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          transition: 'all 300ms ease-out',
          transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
      >
        <KeyboardArrowDownIcon sx={{ color: palette.primary.contrastText }} />
      </IconButton>

      <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)} className={classes.item}>Profile</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)} className={classes.item}>Settings</MenuItem>
        <MenuItem
          onClick={() => {
            toggleFilters()
            setAnchorEl(null)
          }}
          className={classes.item}
        >
          {showFilters ? 'Hide filters' : 'Show filters'}
        </MenuItem>
        <MenuItem className={classes.switch}>
          <ListItemText>Theme:</ListItemText>
          <ThemeSwitch onChange={handleChange} checked={checked} />
        </MenuItem>
      </Menu>
    </>
  )
}
