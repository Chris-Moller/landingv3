// import MainContainer from "components/shared-components/MainContainer";
import { useTheme } from "@mui/material/styles";
// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./product.css"
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
            marginLeft: "20px",
            marginRight: "20px",
            paddingBottom: "0px",
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
                [theme.breakpoints.down("sm")]: {
                  fontSize: "42pt",
                  textAlign: "center",
                },
              }}
              variant="h2"
            >
              <h1>EigenLayer</h1>
            </Typography>
            <Typography
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: "22pt",
                  textAlign: "center",
                },
              }}
              variant="h4"
            >
              <h1>The Ethereum Restaking Collective</h1>
            </Typography>
            <Typography
              sx={{
                marginTop: "60px",
                fontWeight: "900",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "80px",
                  fontSize: "16pt",
                  textAlign: "center",
                },
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
                marginTop: "50px",
                textAlign: "center",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "80px",
                  fontSize: "24pt",
                },
              }}
              variant="h4"
            >
              <h1>How does EigenLayer work?</h1>
            </Typography>
            <Box
            component="img"
              sx={{
                marginTop: "50px",
                justifySelf: "center",
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "10px",
                width: "70%",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
                [theme.breakpoints.down("sm")]: {
                  width: "100%",
                },
              }}
              src="/images/EigenDiagram.png"
              alt=""
            />
            <Typography
              sx={{
                marginTop: "120px",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "60px",
                  textAlign: "center",
                  fontSize: "16pt",
                },
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
                [theme.breakpoints.down("sm")]: {
                  marginTop: "30px",
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                Restaking can then be leveraged to secure EigenLayer via
                delegating withdraw credential or re-staking staking
                derivatives.
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "40px",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "30px",
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                Nodes in Ethereum's trust network can permissionlessly opt-in to
                secure the protocols of their choice.
              </h5>
            </Typography>
          </Grid>
          <Grid
            sx={{
              marginTop: "25rem"
            }}
            item
            md={5}
          >
            <Typography
              sx={{
                marginTop: "40px",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "30px",
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                Ethereum brought modularity to blockchains with the decoupling
                of trust and innovation. With the introduction of a fixed
                consensus protocol, trust provided from validators staking ETH
                along with EVM, the DApp innovation phase was kickstarted.
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "40px",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "30px",
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                Eigenlayer Restaking: Validators can enter the Eigenlayer
                platform by simply changing withdrawal credentials or using
                liquid-staking derivatives.
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "40px",
                [theme.breakpoints.down("sm")]: {
                  marginTop: "30px",
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                Restaked validators in Ethereum's trust network can
                permissionlessly opt-in to secure and bootstrap projects of
                their choice, earning additional yield.
              </h5>
            </Typography>
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
            marginLeft: "20px",
            marginRight: "20px",
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
                [theme.breakpoints.down("sm")]: {
                  fontSize: "26pt",
                  textAlign: "center",
                },
              }}
              variant="h3"
            >
              <h3>Leveraging Trust</h3>
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
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                Decoupling the consensus protocol from the trust network of
                validators allows us to eliminate the bootstrapping problem for
                projects.
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
              src="/images/decoupled.png"
              alt=""
            />
            <Typography
              sx={{
                marginTop: "60px",
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                Deploying in proof of stake systems has never been easier
                allowing Eigenlayer to enable open innovation on Ethereum.
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "60px",
                background:
                  "linear-gradient(-180deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                  fontSize: "26pt",
                },
              }}
              variant="h3"
            >
              <h3>Earn Yield supporting Innovation</h3>
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
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                Validators on Ethereum can opt-in to self-operate or delegate to
                operators.
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "60px",
                [theme.breakpoints.down("sm")]: {
                  textAlign: "center",
                  fontSize: "16pt",
                },
              }}
              variant="h5"
            >
              <h5>
                These validators will earn yield for supporting new middleware
                and projects bringing stakers closer to innovation.
              </h5>
            </Typography>
          </Grid>
          <Grid
            sx={{
              [theme.breakpoints.down("md")]: {
                visibility: "hidden",
                height: "0px",
              },
            }}
            item
            md={5}
          >
            <img
              style={{
                position: "sticky",
                top: "140px",
              }}
              src="/images/test3.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
