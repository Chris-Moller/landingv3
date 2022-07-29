import MainContainer from "components/shared-components/MainContainer";
import { Link as RouterLink} from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BlueButton from "components/shared-components/BlueButton";

export default function Careers() {
  const theme = useTheme();
  const Link = styled(RouterLink)(() => ({
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 600,
    color: "#D8F8FF",
    position: "relative",
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      bottom: -12,
      left: 0,
      width: 0,
      height: 3,
      borderRadius: "10px",
      backgroundColor: "#1BA8C7",
      transition: "all .2s ease-out",
    },
    "&:hover": {
      fontWeight: 700,
      color: "#ECFCFF",
      "&:after": {
        width: 25,
      },
    },
  }));
  
  return (
    <MainContainer>
      <Box component="section">
        <MainContainer>
        <div>
        <Typography
          variant="h1"
          sx={{
            fontSize: "28px",
            fontWeight: 400,
            textAlign: "center",
            "& span": { fontWeight: 700 },
          }}
        >
        <span>Help us build the open innovation platform:</span>
        </Typography>        
        <p>We are actively looking for highly talented individuals, who resonate with our mission of enabling open innovation in the decentralized web. If you are interested in building hyperscale distributed systems, or in building an engaged ecosytem around EigenLayer, please contact us at: <span>jobs@layrlabs.org</span></p>
      </div>
        </MainContainer>
      </Box>
      <Box
      component="section"
      sx={{
        marginTop: "26px",
        paddingBottom: "105px",
        [theme.breakpoints.down("xl")]: {
          marginTop: "100px",
        },
        [theme.breakpoints.down("lg")]: {
          marginTop: "170px",
        },
        [theme.breakpoints.down("md")]: {
          marginTop: "30px",
        },
        [theme.breakpoints.down("sm")]: {
          marginTop: "10px",
        },
      }}
    >
      <MainContainer>
        <Typography
          variant="h3"
          sx={{
            fontSize: "28px",
            fontWeight: 400,
            textAlign: "center",
            "& span": { fontWeight: 700 },
          }}
        >
        <span>Featured jobs:</span>
        </Typography>
        <Box
          sx={{
            maxWidth: 1170,
            margin: "58px auto 0",
            "& .my-card": {
              backgroundColor: "#121927",
              borderRadius: "5px",
              padding: "36px 56px 84px",
              height: "100%",
              [theme.breakpoints.down("lg")]: {
                padding: "36px 36px 64px",
              },
            },
            "& h4": {
              fontSize: "28px",
              fontWeight: 400,
              lineHeight: 2.1,
              "& span": { fontWeight: 700 },
              position: "relative",
              "&:after": {
                content: "''",
                display: "block",
                position: "absolute",
                left: 0,
                bottom: 0,
                width: 25,
                height: 3,
                borderRadius: "10px",
              },
            },
            "& p": {
              fontWeight: 600,
              lineHeight: 1.875,
              marginTop: "25px",
            },
          }}
        >
          <Grid container spacing={2.5}>
            <Grid item md={6} xs={12}>
              <Paper
                className="my-card"
                sx={{
                  cursor: "pointer",                    
                    background:
                      "linear-gradient(180deg, rgba(18, 25, 39, 0) 0%, rgba(18, 25, 39, 0.25) 54.69%, rgba(206, 137, 33, 0.5) 100%)",                  
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ "&:after": { backgroundColor: "#CE8921" } }}
                >
                  <span>GoLang Engineer</span>
                </Typography>
                <Typography>
                <li>Possess extensive Golang production experience</li>
              <li>Passionate about blockchain technology (especially Ethereum)</li>
              <li>Experienced with distributed systems and architecture, and engineering on large-scale systems</li>
              <h3>Apply to: jobs@layrlabs.org</h3>
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper
                className="my-card"
                sx={{
                  cursor: "pointer",
                  
                    background:
                      "linear-gradient(180deg, rgba(18, 25, 39, 0) 0%, rgba(18, 25, 39, 0.25) 54.69%, rgba(44, 138, 98, 0.5) 100%)",                    
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ "&:after": { backgroundColor: "#2C8A62" } }}
                >
                <span>Graphic Designer</span>
                </Typography>
                <Typography>
                <li>Extensive experience building user-experience driven product</li>
              <li>Passionate about blockchain technology (especially Ethereum)</li>
              <li>Experienced with prototyping and design creative tools is a must.</li>
              <h3>Apply to: jobs@layrlabs.org</h3>
                </Typography>
                {/* <BlueButton sx={{ width: 140, marginTop: "20px" }} href="http://18.224.169.114:3000/">
        Try Now!
            </BlueButton> */}
              </Paper>              
            </Grid>
          </Grid>
        </Box>
      </MainContainer>
        </Box>
</MainContainer>
  );
}
