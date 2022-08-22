import { Link as RouterLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BlueButton from "components/shared-components/BlueButton";
import MainContainer from "components/shared-components/MainContainer";
import { display, width } from "@mui/system";

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
                    variant="outlined"
                    className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl"
                    sx={{ width: 154, position: "relative", zIndex: 2 }}
                  >
                    Learn More
                  </BlueButton>
                </Link>
              </Box>
            </Grid>
            <Grid xs={12}>
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
          marginTop: "550px",
          [theme.breakpoints.down("xl")]: {
            marginTop: "350px",
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
              fontSize: "36px",
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
            sx={{
              textAlign: "center",
              marginTop: "28px",
              fontWeight: 300,
              fontSize: "22px",
            }}
          >
            Our products provide cryptoeconomic security for services and
            companies in modular blockchain layers.
          </Typography>
        </MainContainer>
        <Box
          sx={{
            backgroundImage: "url(/images/background-eigen.png)",
            backgroundSize: "cover",
            minHeight: "1000px",
          }}
        >
          <Box
            sx={{
              maxWidth: 1170,
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              position: "relative",
              [theme.breakpoints.down("lg")]: {
                marginLeft: "3rem",
                marginRight: "3rem",
              },
              [theme.breakpoints.down("md")]: {
                marginLeft: "3rem",
                marginRight: "3rem",
              },
              [theme.breakpoints.down("sm")]: {
                marginLeft: "3rem",
                marginRight: "3rem",
              },
              "& .topo-title": {
                marginTop: "150px",
              },
              "& .my-card": {
                borderRadius: "10px",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
                padding: "36px 56px 84px",
                height: "100%",
                marginTop: "150px",
                [theme.breakpoints.down("lg")]: {
                  padding: "36px 36px 64px",
                },
              },
              "& h4": {
                fontSize: "28px",
                fontWeight: 400,

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
                lineHeight: 1.875,
                marginTop: "25px",
              },
              "& .smallCube": {
                width: "170px",
                right: "-15%",
                top: "-12%",
                position: "absolute",
                left: "auto",
                bottom: "auto",
                [theme.breakpoints.down("xxl")]: {
                  width: "130px",
                  right: "-3%",
                  top: "0%",
                },
                [theme.breakpoints.down("xl")]: {
                  width: "80px",
                  right: "9%",
                  top: "-2%",
                },
                [theme.breakpoints.down("lg")]: {
                  width: "80px",
                  right: "7%",
                  top: "-5%",
                },
                [theme.breakpoints.down("md")]: {
                  width: "170px",
                  right: 350,
                  top: 1000,
                },
                [theme.breakpoints.down("sm")]: {
                  width: "170px",
                  right: 350,
                  top: 1000,
                },
              },
              "& .bigCube": {
                width: "270px",
                right: "-30%",
                top: "10%",
                position: "absolute",
                left: "auto",
                bottom: "auto",
                [theme.breakpoints.down("xxl")]: {
                  width: "200px",
                  right: "-14%",
                  top: "15%",
                },
                [theme.breakpoints.down("xl")]: {
                  width: "145px",
                  right: "0%",
                  top: "5%",
                },
                [theme.breakpoints.down("lg")]: {
                  width: "145px",
                  right: "-3%",
                  top: "5%",
                },
                [theme.breakpoints.down("md")]: {
                  width: "270px",
                  right: "-30%",
                  top: "10%",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "270px",
                  right: "-30%",
                  top: "10%",
                },
              },
            }}
          >
            <img
              className="smallCube"
              src="/images/eigen-small-cube.png"
              alt=""
            />
            <img className="bigCube" src="/images/eigen-big-cube.png" alt="" />
            <Grid
              container
              spacing={2.5}
              sx={{
                "& span": {
                  background:
                    "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              <Grid item md={5}>
                <Typography
                  className="topo-title"
                  variant="h4"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    "& img": {
                      marginLeft: "7px",
                      width: "32px",
                    },
                  }}
                >
                  Eigen<span>Layer</span>
                  <img src="/images/EL-icon.svg" alt="" />
                </Typography>
                <Typography>
                  A platform to leverage Ethereum security through the
                  innovative method of restaking.
                </Typography>
              </Grid>
              <Grid
                item
                md={7}
                sm={12}
                sx={{
                  [theme.breakpoints.down("lg")]: {
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                  [theme.breakpoints.down("md")]: {
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                  [theme.breakpoints.down("sm")]: {
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }}
              >
                <Paper
                  className="my-card"
                  sx={{
                    cursor: "pointer",
                    backgroundImage: "url(/images/Eigen-product-bg.png)",
                    backgroundSize: "cover",
                  }}
                >
                  <Typography variant="h4">
                    Integrate with the Ecosystem
                  </Typography>
                  <Box>
                  <Link to="/resources">
                    <BlueButton
                      variant="outlined"
                      className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                      sx={{
                        width: 154,
                        position: "relative",
                        zIndex: 2,
                        marginTop: "16px",
                      }}
                    >
                      Learn More →
                    </BlueButton>
                  </Link>
                </Box>
                </Paper>
              </Grid>
              <Grid item md={5} sm={12}>
                <Typography
                  className="topo-title"
                  variant="h4"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    "& img": {
                      marginLeft: "7px",
                      width: "32px",
                    },
                  }}
                >
                  Eigen<span>DA</span>
                  <img src="/images/EDA-icon.svg" alt="" />
                </Typography>
                <Typography>
                  A highly customizable and hyperscaled data availability
                  service on EigenLayer, designed for Optimistic and ZK rollups.
                </Typography>
              </Grid>
              <Grid
                item
                md={7}
                sm={12}
                sx={{
                  [theme.breakpoints.down("lg")]: {
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                  [theme.breakpoints.down("md")]: {
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                  [theme.breakpoints.down("sm")]: {
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }}
              >
                <Paper
                                    className="my-card"
                                    sx={{
                                      cursor: "pointer",
                                      backgroundImage: "url(/images/Eigen-product-EDA-bg.png)",
                                      backgroundSize: "cover",
                                    }}
                                  >
                                    <Typography variant="h4">
                                      Hyperscale your dApp
                                    </Typography>
                                    <Box>
                                    <Link to="/resources">
                                      <BlueButton
                                        variant="outlined"
                                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                                        sx={{
                                          width: 154,
                                          position: "relative",
                                          zIndex: 2,
                                          marginTop: "16px",
                                        }}
                                      >
                                        Learn More →
                                      </BlueButton>
                                    </Link>
                                  </Box>
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
        </Box>
      </Box>
    </>
  );
}
