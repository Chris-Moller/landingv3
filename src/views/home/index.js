import { Link as RouterLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BlueButton from "components/shared-components/BlueButton";
import MainContainer from "components/shared-components/MainContainer";

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
  },
  "&:hover": {
    fontWeight: 700,
    color: "#ECFCFF",
    "&:after": {
      width: 25,
    },
  },
}));

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Box component="section">
        <MainContainer>
          <Grid container>
            <Grid>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "40px",
                    lineHeight: 1.25,
                    fontWeight: "lighter",
                    marginTop: "50px",
                    color: "white",
                    "& span": {
                      fontWeight: "bold",
                      background:
                        "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    },
                    [theme.breakpoints.down("xl")]: {
                      fontSize: "40px",
                      marginTop: "70px",
                    },
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "40px",
                      marginTop: "20px",
                      width: "100%",
                    },
                    [theme.breakpoints.down("sm")]: { fontSize: "28px" },
                    minWidth: "400px",
                  }}
                >
                  Leveraging <span>trust.</span>
                  <br />
                  Hyperscaling <span>blockchains.</span>
                  <br />
                  Unleashing <span>open innovation.</span>
                </Typography>
              </Box>
              <br />
              <Box>
                <Link to="/resources">
                  <BlueButton
                    className="hover:bg-gradient-to-r from-purple-grad to-blue-grad transition-property: all
                  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
                  transition-duration: 3000ms border border-solid rounded-2xl shadow-lg shadow-light-purple-500/50"
                    sx={{ width: 154, position: "relative", zIndex: 2 }}
                  >
                    Learn More
                  </BlueButton>
                </Link>
              </Box>
            </Grid>
            <Grid item md={8} xs={12}>
              <Box
                sx={{
                  "& img": {
                    position: "absolute",
                    top: "100px",
                    marginLeft: "300px",
                    zIndex: -99,
                    width: "1000px",
                    [theme.breakpoints.down("xl")]: {
                      width: 800,
                      marginLeft: "200px",
                    },
                    [theme.breakpoints.down("lg")]: {
                      width: 560,
                    },
                    [theme.breakpoints.down("md")]: {
                      width: 740,
                      marginLeft: "-100px",
                      position: "absolute",
                      left: "150px",
                      top: "100px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      width: 400,
                      marginLeft: "-100px",
                      marginTop: "100px",
                    },
                  },
                  [theme.breakpoints.down("md")]: {
                    textAlign: "right",
                  },
                  [theme.breakpoints.down("sm")]: {
                    marginLeft: "-100px",
                  },
                }}
                // sx={{
                //   backgroundImage: `url(${"/images/layr-hero-asset.png"})`,
                //   backgroundSize: "contain",
                //   backgroundRepeat: "no-repeat",
                //   height: "800px"
                // }}
              >
                <img src="/images/layr-hero-asset.png" alt="Background" />
              </Box>
            </Grid>
          </Grid>
        </MainContainer>
      </Box>
      <Box
        component="section"
        sx={{
          marginTop: "570px",
          paddingBottom: "105px",
          [theme.breakpoints.down("xl")]: {
            marginTop: "250px",
          },
          [theme.breakpoints.down("lg")]: {
            marginTop: "200px",
          },
          [theme.breakpoints.down("md")]: {
            marginTop: "320px",
          },
          [theme.breakpoints.down("sm")]: {
            marginTop: "300px",
          },
        }}
      >
        <MainContainer>
          <Typography
            variant="h3"
            sx={{
              fontSize: "32px",
              fontWeight: 400,
              textAlign: "center",
              "& span": {
                fontWeight: 700,
                background:
                  "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              },
            }}
          >
            Explore the <span>solutions:</span>
          </Typography>
          <Typography
            sx={{ textAlign: "center", marginTop: "28px", fontWeight: 300, fontSize: "22px" }}
          >
            Our products provide cryptoeconomic security for services and
            companies in modular blockchain layers.
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
                    <span>EigenLayer</span>
                  </Typography>
                  <Typography>
                    A platform to leverage Ethereum security through the
                    innovative method of restaking.
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
                    Eigen<span>DA</span>
                  </Typography>
                  <Typography>
                    A highly customizable and hyperscaled data availability
                    service on EigenLayer, designed for Optimistic and ZK
                    rollups.
                  </Typography>
                  {/* <BlueButton sx={{ width: 140, marginTop: "20px" }} href="http://18.224.169.114:3000/">
          Try Now!
              </BlueButton> */}
                </Paper>
              </Grid>
            </Grid>
            {/* <br />
              <br />
              <Typography
              
                  variant="h4"
                  sx={{
                    fontSize: "12px",
                    textAlign: "center",
                    lineHeight: 1.25,
                    fontWeight: 400,
                    marginTop: "100px",
                    "& span": {
                      fontWeight: 700,
                    },
                    [theme.breakpoints.down("xl")]: {
                      fontSize: "32px",
                      marginTop: "70px",
                    },
                    [theme.breakpoints.down("lg")]: {
                      fontSize: "32px",
                      marginTop: "20px",
                    },
                    [theme.breakpoints.down("sm")]: { fontSize: "28px" },
                  }}
                >                  
                <span>Subscribe to our newsletter:</span>
                <br />

              <iframe title="Newsletter" src="https://docs.google.com/forms/d/e/1FAIpQLSdLKTn5zy4Eyf9mG_puv7WL-0mPOkxuzRNjvcyAKP_cCPXWuQ/viewform?embedded=true" width="600" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

              </Typography>               */}
          </Box>
        </MainContainer>
      </Box>
    </>
  );
}
