import { Link as RouterLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BlueButton from "components/shared-components/BlueButton";
import MainContainer from "components/shared-components/MainContainer";
import MailModal from "utils/MailModal";
import { BsArrowRight } from "react-icons/bs";

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
            paddingTop: "150px",
          },
        }}
      >
        <Box component="section">
          <MainContainer>
            <Grid container>
              <Grid>
                <Box>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "48px",
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
                      [theme.breakpoints.down("xxxl")]: {
                        fontSize: "70px",
                        marginTop: "70px",
                      },
                      [theme.breakpoints.down("xl")]: {
                        fontSize: "60px",
                        marginTop: "70px",
                      },
                      [theme.breakpoints.down("lg")]: {
                        fontSize: "65px",
                        marginTop: "20px",
                        width: "100%",
                        paddingRight: "60px",
                      },
                      [theme.breakpoints.down("md")]: {
                        fontSize: "54px",
                        marginTop: "100px",
                        width: "100%",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                      },
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "36px",
                        minWidth: "300px",
                        textAlign: "center",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                      },
                      [theme.breakpoints.down("xs")]: {
                        fontSize: "34px",
                        minWidth: "300px",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      },
                    }}
                  >
                    The Ethereum <span>Restaking Collective.</span>
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "38px",
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
                        fontSize: "38px",
                        marginTop: "70px",
                      },
                      [theme.breakpoints.down("lg")]: {
                        fontSize: "36px",
                        marginTop: "20px",
                        width: "100%",
                        
                      },
                      [theme.breakpoints.down("md")]: {
                        fontSize: "36px",
                        marginTop: "20px",
                        width: "100%",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                      },
                      [theme.breakpoints.down("sm")]: {
                        fontSize: "28px",
                        minWidth: "300px",
                        textAlign: "center",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                      },
                      [theme.breakpoints.down("xs")]: {
                        fontSize: "22px",
                        minWidth: "300px",
                      },
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
                <Box
                  sx={{
                    [theme.breakpoints.down("md")]: {
                      paddingLeft: "40px",
                      paddingRight: "40px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      paddingLeft: "25px",
                      paddingRight: "25px",
                    },

                  }}
                >
                  <Link to="/resources">
                    <BlueButton
                      variant="outlined"
                      className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl"
                      sx={{
                        width: 154,
                        position: "relative",
                        zIndex: 2,
                        [theme.breakpoints.down("md")]: {
                          width: 450,
                        },
                        [theme.breakpoints.down("sm")]: {
                          width: "100%",
                        },
                      }}
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
                      top: "300px",
                      marginLeft: "300px",
                      zIndex: -99,
                      width: "1000px",
                      [theme.breakpoints.down("xl")]: {
                        width: 800,
                        marginLeft: "200px",
                        marginTop: "100px",
                      },
                      [theme.breakpoints.down("lg")]: {
                        width: 560,
                      },
                      [theme.breakpoints.down("md")]: {
                        width: 600,
                        marginLeft: "auto",
                      },
                      [theme.breakpoints.down("sm")]: {
                        width: 400,
                        marginLeft: "auto",
                        marginTop: "100px",
                      },
                      [theme.breakpoints.down("xs")]: {
                        marginTop: "100px",
                      },
                    },
                    [theme.breakpoints.down("md")]: {
                      textAlign: "right",
                    },
                    [theme.breakpoints.down("xs")]: {
                      width: 320,
                      marginRight: "auto",
                    },
                  }}
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
              marginTop: "200px",
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
                [theme.breakpoints.down("xs")]: { fontSize: "24px" },
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
                [theme.breakpoints.down("xs")]: { fontSize: "18px" },
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
              [theme.breakpoints.down("md")]: {
                minHeight: "1250px",
              },
              [theme.breakpoints.down("sm")]: {
                minHeight: "1400px",
              },
              [theme.breakpoints.down("xs")]: {
                minHeight: "1500px",
              },
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
                  width: "100%",
                  marginTop: "150px",
                  [theme.breakpoints.down("lg")]: {
                    padding: "36px 36px 64px",
                  },
                  [theme.breakpoints.down("md")]: {
                    padding: "36px 36px 64px",
                    marginTop: "20px",
                    height: "120%",
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
                    width: "80px",
                    right: "13%",
                    top: "12%",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "80px",
                    right: "20%",
                    top: "2%",
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: "67px",
                    right: "20%",
                    top: "1%",
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
                    width: "160px",
                    right: "-4%",
                    top: "-2%",
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: "140px",
                    right: "-10%",
                    top: "5%",
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: "110px",
                    right: "-18%",
                    top: "4%",
                  },
                },
              }}
            >
              <img
                className="smallCube"
                src="/images/eigen-small-cube.png"
                alt=""
              />
              <img
                className="bigCube"
                src="/images/eigen-big-cube.png"
                alt=""
              />
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
                  sx={
                    {
                      width: "100%",
                    }
                  }
                >
                  <Paper
                    className="my-card"
                    sx={{
                      backgroundImage: "url(/images/Eigen-product-bg.png)",
                      backgroundSize: "cover",
                      [theme.breakpoints.down("md")]: {
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%",
                      },
                    }}
                  >
                    <Typography variant="h4">
                      Integrate with the Ecosystem
                    </Typography>
                    <Box>
                      <Link to="/products">
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
                          Learn More{" "}
                          <BsArrowRight style={{ marginLeft: "5px" }} />
                        </BlueButton>
                      </Link>
                    </Box>
                  </Paper>
                </Grid>
                <Grid
                  item
                  md={5}
                  sx={{
                    [theme.breakpoints.down("md")]: {
                      marginTop: "60px",
                    },
                    [theme.breakpoints.down("sm")]: {
                      marginTop: "50px",
                    },
                  }}
                >
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
                    service on EigenLayer, designed for Optimistic and ZK
                    rollups.
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
                      width: "100%",
                    },
                  }}
                >
                  <Paper
                    className="my-card"
                    sx={{
                      backgroundImage: "url(/images/Eigen-product-EDA-bg.png)",
                      backgroundSize: "cover",
                    }}
                  >
                    <Typography variant="h4">
                      Integrate Data Availability for Rollups
                    </Typography>
                    <Box>
                      <Link to="/products">
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
                          Learn More{" "}
                          <BsArrowRight style={{ marginLeft: "5px" }} />
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
          <Box
            sx={{
              textAlign: "center",
              paddingBottom: "60px",
              background:
                "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
              "& h1": {
                fontSize: "26pt",
                paddingTop: "30px",
                paddingBottom: "8px",
                fontWeight: "700",
                color: "white",
              },
              "& p": {
                paddingBottom: "25px",
              },
            }}
          >
            <Typography variant="h1">
              <h1>Don't miss an update</h1>
            </Typography>
            <Typography variant="p">
              <p>
                Sign up for our newsletter to get the latest updates on our
                products.
              </p>
            </Typography>
            <MailModal />
          </Box>
        </Box>
      </Box>
    </>
  );
}
