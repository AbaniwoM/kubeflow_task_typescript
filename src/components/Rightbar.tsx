import { Typography, Container, Link } from '@material-ui/core';
import * as React from 'react';
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import GitHubIcon from "@mui/icons-material/GitHub";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

export interface IRightbarProps {
}

export function Rightbar (props: IRightbarProps) {
  return (
    <div>
      <Container
        style={{
          height: "160vh",
          marginTop: "50px",
          paddingLeft: "5px",
          width: "5%",
          position: "absolute",
        }}
      >
        <Link href="#" underline="none">
          <Container
            style={{
              display: "flex",
              color: "#4279f4",
              position: "fixed",
              marginTop: "27px",
              marginLeft: "105px",
            }}
          >
            <InsertDriveFileIcon
              style={{ fontSize: "1.2rem", marginTop: "2px" }}
            />
            <Typography style={{ marginLeft: "4px" }}>
              View page source
            </Typography>
          </Container>
        </Link>
        <Link href="#" underline="none">
          <Container
            style={{
              display: "flex",
              color: "#4279f4",
              position: "fixed",
              marginTop: "57px",
              marginLeft: "105px",
            }}
          >
            <EditIcon style={{ fontSize: "1.2rem", marginTop: "2px" }} />
            <Typography style={{ marginLeft: "4px" }}>
              Edit this page
            </Typography>
          </Container>
        </Link>
        <Link href="#" underline="none">
          <Container
            style={{
              display: "flex",
              color: "#4279f4",
              position: "fixed",
              marginTop: "87px",
              marginLeft: "105px",
            }}
          >
            <EditIcon style={{ fontSize: "1.2rem", marginTop: "2px" }} />
            <Typography style={{ marginLeft: "4px" }}>
              Create child page
            </Typography>
          </Container>
        </Link>
        <Link href="#" underline="none">
          <Container
            style={{
              display: "flex",
              color: "#4279f4",
              position: "fixed",
              marginTop: "115px",
              marginLeft: "105px",
            }}
          >
            <GitHubIcon style={{ fontSize: "1.2rem", marginTop: "2px" }} />
            <Typography style={{ marginLeft: "4px" }}>
              Create documentation <br /> issue
            </Typography>
          </Container>
        </Link>
        <Link href="#" underline="none">
          <Container
            style={{
              display: "flex",
              color: "#4279f4",
              position: "fixed",
              marginTop: "167px",
              marginLeft: "105px",
            }}
          >
            <FormatListNumberedIcon
              style={{ fontSize: "1.2rem", marginTop: "2px" }}
            />
            <Typography style={{ marginLeft: "4px" }}>
              Create project issue
            </Typography>
          </Container>
        </Link>
        <Container
          style={{
            marginTop: "949px",
            marginLeft: "250px",
            backgroundColor: "#213d7a",
            height: "15vh",
            width: "128%",
            position: "absolute",
          }}
        >
        </Container>
      </Container>
    </div>
  );
}
