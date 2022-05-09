import * as React from 'react';
import {Container, Typography} from '@material-ui/core';
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import DateRangeIcon from "@mui/icons-material/DateRange";

export interface  DashFootProps {
}

export function DashFoot (props:  DashFootProps) {
  return (
    <div>
      <Container
        style={{
          backgroundColor: "#213d7a",
          backgroundSize: "cover",
          width: "280%",
          height: "15vh",
          marginRight: "0px",
          padding: 0,
          position: "absolute",
          marginLeft: "-254px",
          marginTop: "30px",
          zIndex: "9",
        }}
      >
        <Container style={{marginTop: "18px", marginLeft: "50px"}}>
          <DateRangeIcon
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1.9rem",
              marginLeft: "100px",
            }}
          />
          <LocalPostOfficeIcon
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1.9rem",
              marginLeft: "50px",
            }}
          />
          <TwitterIcon
            style={{ position: "absolute", color: "white", fontSize: "1.9rem" }}
          />
        </Container>
        <Typography
          style={{
            color: "white",
            fontSize: "12.8px",
            textAlign: "center",
            marginTop: "30px",
            marginLeft: "70px",
          }}
        >
          &copy; 2022 The Kubeflow Authors. | Documentation Distributed under CC
          BY 4.0
        </Typography>
        <Typography
          style={{ color: "#4279f4", fontSize: "12.8px", textAlign: "center", marginLeft: "70px", marginTop: "5px" }}
        >
          Privacy Policy
        </Typography>
      </Container>
    </div>
  );
}
