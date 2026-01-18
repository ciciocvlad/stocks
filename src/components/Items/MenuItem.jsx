import { MenuItem as Item, ListItemText } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import classes from './Items.module.css'

export const MenuItem = ({ value, onClick, text, checked }) => (
  <Item data-value={value} onClick={onClick} className={classes.menu_item}>
    <ListItemText>{text}</ListItemText>
    {checked && <CheckIcon />}
  </Item>
)
