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
          },
        }}
      >
        <Grid container spacing={10}>
          <Grid
            sx={{
              height: "100%",
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
              src="/images/test4.png"
              alt=""
            />
          </Grid>
          <Grid item md={7} sx={{}}>
            <Typography
              sx={{
                background:
                  "linear-gradient(-180deg, rgb(255, 49, 186) 0%, hsla(227, 100%, 66%, 1) 100%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "42pt",
                  textAlign: "center",
                },
              }}
              variant="h2"
            >
              <h1>EigenDA</h1>
            </Typography>
            <Typography
              sx={{
                [theme.breakpoints.down("sm")]: {
                  marginTop: "20px",
                  fontSize: "20pt",
                  textAlign: "center",
                },
              }}
              variant="h4"
            >
              <h1>
                A highly customizable and hyperscaled data availability service,
                designed for Optimistic and ZK rollups.
              </h1>
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
                [theme.breakpoints.down("sm")]: {
                  fontSize: "16pt",
                  textAlign: "center"
                },
              }}
              variant="h5"
            >
              <h5>
                With minimal bandwidth and storage requirements, you can
                validate EigenDA, the most scalable and performant data
                availability service in the market.
              </h5>
            </Typography>
            <Typography
              sx={{
                marginTop: "40px",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "16pt",
                  textAlign: "center"
                },
              }}
              variant="h5"
            >
              <h5>
                As more modular blockchain services and applications adopt
                EigenLayer for their crypto-economic security, you can launch
                additional validation services in just a few clicks.
              </h5>
            </Typography>
            <img
              style={{
                marginTop: "50px",
                justifySelf: "center",
                position: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "10px",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
              }}
              src="/images/EigenDAplace.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
