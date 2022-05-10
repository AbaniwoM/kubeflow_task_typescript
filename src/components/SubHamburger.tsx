import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, makeStyles, Link, Container } from "@material-ui/core";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "15.4px",
    fontWeight: 800,
    marginLeft: 10,
  },
}));
export const SubHamburger = () => {
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
            color: "#4279f4",
            textTransform: "capitalize",
            fontSize: "15.4px",
            fontWeight: 800,
            marginRight: 1,
            marginLeft: 12,
          }}
        >
          <MenuIcon style={{ fontSize: "2rem" }} />
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
                  width: "3600%",
                  marginTop: "3px",
                  marginLeft: "-160px",
                  backgroundColor: "white",
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
                    <Link href="#" underline="none">
                      <Typography
                        style={{
                          color: "#4279f4",
                          borderBottom: "1px solid #4279f4",
                          fontWeight: "600",
                          marginTop: "17px",
                          paddingBottom: "5px",
                          marginLeft: "10px",
                          width: "83%",
                        }}
                      >
                        Documentation
                      </Typography>
                    </Link>
                    <Link href="#" underline="none">
                      <Container
                        style={{
                          display: "flex",
                          marginTop: "15px",
                          marginLeft: "-17px",
                          color: "black",
                        }}
                      >
                        <ArrowRightIcon />
                        <Typography>About</Typography>
                      </Container>
                    </Link>
                    <Link href="#" underline="none">
                      <Container
                        style={{
                          display: "flex",
                          marginTop: "8px",
                          marginLeft: "-17px",
                          color: "black",
                          width: "110%",
                        }}
                      >
                        <ArrowRightIcon />
                        <Typography style={{ fontWeight: 600 }}>
                          Getting Started
                        </Typography>
                      </Container>
                    </Link>
                    <Link href="#" underline="none">
                      <Container
                        style={{
                          display: "flex",
                          marginTop: "8px",
                          marginLeft: "-17px",
                          color: "black",
                        }}
                      >
                        <ArrowRightIcon />
                        <Typography>Components</Typography>
                      </Container>
                    </Link>
                    <Link href="#" underline="none">
                      <Container
                        style={{
                          display: "flex",
                          marginTop: "8px",
                          marginLeft: "-17px",
                          color: "black",
                          width: "110%",
                        }}
                      >
                        <ArrowRightIcon />
                        <Typography>External Add-Ons</Typography>
                      </Container>
                    </Link>
                    <Link href="#" underline="none">
                      <Container
                        style={{
                          display: "flex",
                          marginTop: "8px",
                          marginLeft: "-17px",
                          color: "black",
                        }}
                      >
                        <ArrowRightIcon />
                        <Typography>Distributions</Typography>
                      </Container>
                    </Link>
                    <Link href="#" underline="none">
                      <Container
                        style={{
                          display: "flex",
                          marginTop: "8px",
                          marginLeft: "-17px",
                          color: "black",
                        }}
                      >
                        <ArrowRightIcon />
                        <Typography>Releases</Typography>
                      </Container>
                    </Link>
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
