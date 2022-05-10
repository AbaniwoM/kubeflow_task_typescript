import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import {Typography, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "15.4px",
    fontWeight: 800,
    marginLeft: 10,
  },
}));
export const Hamburger = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{
            color: "white",
            textTransform: "capitalize",
            fontSize: "15.4px",
            fontWeight: 800,
            marginRight: 1,
            marginLeft: 12,
          }}
        >
          <MenuIcon style={{fontSize: "2rem"}} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper
                style={{
                  width: "200%",
                  marginTop: "3px",
                  marginLeft: "-10px",
                  backgroundColor: "#4279f4",
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{ color: "white" }}
                  >
                    <MenuItem onClick={handleClose}>
                      <ArticleIcon
                        style={{ fontSize: "1.3rem", marginTop: "35px" }}
                      />
                      <Typography
                        variant="h6"
                        className={classes.text}
                        style={{ marginTop: "35px" }}
                      >
                        Documentation
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <RssFeedIcon
                        style={{ fontSize: "1.3rem", marginTop: "2px" }}
                      />
                      <Typography variant="h6" className={classes.text}>
                        Blog
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <GitHubIcon
                        style={{ fontSize: "1.3rem", marginTop: "2px" }}
                      />
                      <Typography variant="h6" className={classes.text}>
                        GitHub
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Typography variant="h6" className={classes.text}>
                        Kubeflow Version
                      </Typography>
                      <ArrowDropDownIcon style={{ marginTop: "1px" }} />
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};
