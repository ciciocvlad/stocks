import { IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { ThemeSwitch } from "../ThemeSwitch/ThemeSwitch";

export const ActionsMenu = ({
  checked,
  setColorMode,
  showFilters,
  toggleFilters,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { palette } = useTheme();

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleChange = (event) => setColorMode(event ? "dark" : "light");

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        aria-controls={open ? "actions-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          transition: "all 300ms ease-out",
          transform: anchorEl ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        <KeyboardArrowDownIcon sx={{ color: palette.primary.contrastText }} />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
        <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
        <MenuItem
          onClick={() => {
            toggleFilters();
            setAnchorEl(null);
          }}
        >
          {showFilters ? "Hide filters" : "Show filters"}
        </MenuItem>
        <MenuItem>
          Theme: <ThemeSwitch onChange={handleChange} checked={checked} />
        </MenuItem>
      </Menu>
    </>
  );
};
