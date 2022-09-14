import React from "react";
import MainContainer from "components/shared-components/MainContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import JobsBoard from "utils/JobsBoard";
import { masterJobsList } from "utils/interact";
import { useTheme } from "@mui/material/styles";

export default function Careers() {
  const [jobs, setJobs] = useState();
  const theme = useTheme();

  useEffect(() => {
    masterJobsList().then((res) => {
      setJobs(res);
    });
  }, []);

  return (
    <Box
      component="main"
      sx={{
        paddingTop: "250px",
        [theme.breakpoints.down("xl")]: {
          paddingTop: "250px",
        },
        [theme.breakpoints.down("md")]: {
          paddingTop: "150px",
        },
        [theme.breakpoints.down("sm")]: {
          paddingTop: "100px",
          paddingLeft: "20px",
          paddingRight: "20px",
        },

        [theme.breakpoints.down("xs")]: {
          paddingLeft: "10px",
          paddingRight: "10px",
        },
      }}
    >
      <MainContainer>
        <Box component="section">
          <MainContainer>
            <div>
              <Typography
                variant="h1"
                sx={{
                  background:
                    "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  paddingBottom: "1.2rem",
                  borderBottom: "solid",
                  borderBottomWidth: ".5px",
                  fontSize: "28px",
                  fontWeight: 400,
                  textAlign: "center",
                  "& span": { fontWeight: 700 },
                }}
              >
                <span>Help us build the open innovation platform</span>
              </Typography>
              <Typography
                sx={{
                  paddingTop: "1.2rem",
                  textAlign: "center",
                }}
              >
                <p>
                  We are actively looking for highly talented individuals, who
                  resonate with our mission of enabling open innovation in the
                  decentralized web. If you are interested in building
                  hyperscale distributed systems, or in building an engaged
                  ecosytem around EigenLayer.
                </p>
              </Typography>
            </div>
          </MainContainer>
        </Box>
        <Box
          component="section"
          sx={{
            marginTop: "60px",
            paddingBottom: "80px",
          }}
        >
          <JobsBoard jobs={jobs} />
        </Box>
      </MainContainer>
    </Box>
  );
}
