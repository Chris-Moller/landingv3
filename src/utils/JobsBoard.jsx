import React from "react";
import MainContainer from "components/shared-components/MainContainer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const JobsBoard = ({ jobs }) => {
  return (
    <MainContainer>
      <Box>
        <Grid
          container
          sx={{
            borderRadius: "10px",
            border: "solid",
            borderWidth: "0.5px",
            borderColor: "#817dac",
            padding: "36px 56px 84px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "20pt",
              marginBottom: "1.25rem",
            }}
          >
            <h1>Current Job Openings</h1>
          </Typography>
          {jobs !== undefined ? (
            <>
              {jobs.map((job, i) => (
                <Grid
                  key={i}
                  md={12}
                  sx={{
                    marginBottom: "15px",
                  }}
                >
                  <Typography
                    onClick={() => {
                        window.open(`${job.absolute_url}`)
                    }}
                    sx={{
                      fontSize: "15pt",
                      fontWeight: "700",
                      background:
                        "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underline",
                        textDecorationColor: "#630feb"
                        
                      },
                    }}
                  >
                    <span>{job.title}</span>
                  </Typography>
                  <span>{job.location.name}</span>
                </Grid>
              ))}
            </>
          ) : null}
        </Grid>
      </Box>
    </MainContainer>
  );
};

export default JobsBoard;
