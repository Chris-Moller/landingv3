// import MainContainer from "components/shared-components/MainContainer";
import { useTheme } from "@mui/material/styles";
// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
// import BlueButton from "components/shared-components/BlueButton";
// import { BsArrowRight } from "react-icons/bs"

// const Link = styled(RouterLink)(() => ({
//   textDecoration: "none",
//   fontSize: "16px",
//   fontWeight: 600,
//   color: "#D8F8FF",
//   position: "relative",
//   "&:after": {
//     content: "''",
//     display: "block",
//     position: "absolute",
//     bottom: -12,
//     left: 0,
//     width: 0,
//     height: 3,
//     borderRadius: "10px",
//     backgroundColor: "#1BA8C7",
//     transition: "all .2s ease-out",
//   },
//   "&:hover": {
//     fontWeight: 700,
//     color: "#ECFCFF",
//     "&:after": {
//       width: 25,
//     },
//   },
// }));

export default function Products() {
  const theme = useTheme();
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [fixed, setFixed] = useState("fixed");

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#00001D",
        backgroundSize: "cover",
        minHeight: "1000px",
        paddingTop: "150px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          maxWidth: "1300px",
          paddingBottom: "120px",
          [theme.breakpoints.down("xl")]: {
            maxWidth: "1150px",
          },
          [theme.breakpoints.down("lg")]: {
            maxWidth: "850px",
          },
          [theme.breakpoints.down("md")]: {
            maxWidth: "550px",
          },
          [theme.breakpoints.down("sm")]: {
            maxWidth: "300px",
          },
        }}
      >
        <Grid container spacing={10}>
          <Grid item md={7} sx={{}}>
            <Typography
              sx={{
                background:
                  "linear-gradient(-180deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              variant="h2"
            >
              <h1>EigenLayer</h1>
            </Typography>
            <Typography sx={{}} variant="h4">
              <h1>The Ethereum Restaking Collective</h1>
            </Typography>
            <Typography
              sx={{
                marginTop: "120px",
                fontWeight: "900",
              }}
              variant="h5"
            >
              <h5>
                Eigenlayer is a proof of stake validation marketplace that
                reuses staked capital and existing validation infrastructure.
              </h5>
            </Typography>
            <div
              style={{
                marginTop: "50px",
                height: "1px",
                backgroundColor: "#5100d4",
              }}
            ></div>
            <Typography
              sx={{
                marginTop: "100px",
                textAlign: "center",
              }}
              variant="h4"
            >
              <h1>How does EigenLayer work?</h1>
            </Typography>
            <img
              style={{
                marginTop: "100px",
                justifySelf: "center",
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "10px",
                width: "70%",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
              }}
              src="/images/EigenDiagram.png"
              alt=""
            />
            <Typography
              sx={{
                marginTop: "120px",
              }}
              variant="h5"
            >
              <h5>
                Nodes stake their ETH into securing the Ethereum consensus.
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "40px",
              }}
              variant="h5"
            >
              <h5>
                Restaking can then be leveraged to secure EigenLayer via
                delegating withdraw credential or re-staking
                staking derivatives.
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "40px",
              }}
              variant="h5"
            >
              <h5>
                Nodes in Ethereum's trust network can permissionlessly opt-in
                to secure the protocols of their choice.
              </h5>
            </Typography>
            


            {/* <Typography
              sx={{
                marginTop: "50px",
                maxWidth: "75%"
              }}
              variant="h6"
            >
              <h6>With minimal bandwidth and storage requirements, you can validate EigenDA, the most scalable and performant data availability service in the market. As more modular blockchain services and applications adopt EigenLayer for their crypto-economic security, you can launch additional validation services in just a few clicks.</h6>
            </Typography> */}
          </Grid>
          <Grid
            sx={{
              height: "100%",
            }}
            item
            md={5}
          >
            <img
              style={{
                position: "sticky",
                top: "140px",
              }}
              src="/images/test1.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "auto",
          maxWidth: "1300px",
          paddingBottom: "120px",
          [theme.breakpoints.down("xl")]: {
            maxWidth: "1150px",
          },
          [theme.breakpoints.down("lg")]: {
            maxWidth: "850px",
          },
          [theme.breakpoints.down("md")]: {
            maxWidth: "550px",
          },
          [theme.breakpoints.down("sm")]: {
            maxWidth: "300px",
          },
        }}
      >
        <Grid container spacing={10}>
        <Grid
            sx={{
              height: "100%",
            }}
            item
            md={5}
          >
            <img
              style={{
                position: "sticky",
                top: "140px",
              }}
              src="/images/test2.png"
              alt=""
            />
          </Grid>
          <Grid item md={7} sx={{}}>
            <Typography
              sx={{
                background:
                  "linear-gradient(-180deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              variant="h3"
            >
              <h3>Most validators have excess computing capacity</h3>
            </Typography>
            <div
              style={{
                marginTop: "50px",
                height: "1px",
                backgroundColor: "#5100d4",
              }}
            ></div>
            <Typography
              sx={{
                marginTop: "60px",
              }}
              variant="h5"
            >
              <h5>
              Earn tokens for providing validation services with low system hardware requirements (including the majority of existing hardware) 
              </h5>
            </Typography>
            <img
              style={{
                marginTop: "70px",
                justifySelf: "center",
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "10px",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
              }}
              src="/images/earnTokens.png"
              alt=""
            />
                        <Typography
              sx={{
                marginTop: "60px",
                background:
                  "linear-gradient(-180deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              variant="h3"
            >
              <h3>Bringing agility to Ethereum</h3>
            </Typography>
            <div
              style={{
                marginTop: "50px",
                height: "1px",
                backgroundColor: "#5100d4",
              }}
            ></div>
            <Typography
              sx={{
                marginTop: "60px",
              }}
              variant="h5"
            >
              <h5>
            Ethereum unleashed innovation of DApps with the introduction of EVM, while building a democractic and stable ecosystem. 
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "60px",
              }}
              variant="h5"
            >
              <h5>
              Eigenlayer attempts to solve this agility →  stability tradeoff, hyperscaling innovation on Ethereum 
              </h5>
            </Typography>
            <Typography sx={{marginTop: "70px",                 background:
                  "linear-gradient(-180deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",}} variant="h4">
              <h1>Agility VS democratic governance</h1>
            </Typography>
            <img
              style={{
                marginTop: "20px",
                justifySelf: "center",
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "10px",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
              }}
              src="/images/chart-agility.png"
              alt=""
            />


            {/* <Typography
              sx={{
                marginTop: "50px",
                maxWidth: "75%"
              }}
              variant="h6"
            >
              <h6>With minimal bandwidth and storage requirements, you can validate EigenDA, the most scalable and performant data availability service in the market. As more modular blockchain services and applications adopt EigenLayer for their crypto-economic security, you can launch additional validation services in just a few clicks.</h6>
            </Typography> */}
          </Grid>
          
        </Grid>
      </Box>

      {/* <Box>
          <Grid item md={5}
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
                    width: "100%"
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
                  <Typography variant="h4">Integrate Data Availability for Rollups</Typography>
                </Paper>
              </Grid>
            

          </Box> */}
    </Box>
  );
}
