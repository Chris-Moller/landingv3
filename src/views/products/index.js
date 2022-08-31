import MainContainer from "components/shared-components/MainContainer";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import BlueButton from "components/shared-components/BlueButton";

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
  return (
    <MainContainer
      sx={{
        padding: "100px",
        minHeight: "600px",
        backgroundImage: "url(/images/BackgroundExp.png)",
        backgroundSize: "cover",
        borderRadius: "20px",
        border: "solid",
        borderWidth: "0.5px",
        borderColor: "#817dac",
        marginBottom: "200px",
        [theme.breakpoints.down("lg")]: {
          padding: "35px",
          minHeight: "500px",

        },
        [theme.breakpoints.down("md")]: {
          padding: "25px",
          minHeight: "300px",

        },
        [theme.breakpoints.down("sm")]: {
          padding: "15px",
          minHeight: "200px",

        },
        [theme.breakpoints.down("xs")]: {

        },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          width: "70%",
          fontSize: "22pt",
          marginBottom: "50px",
          [theme.breakpoints.down("lg")]: {

          },
          [theme.breakpoints.down("md")]: {
            fontSize: "16pt",
            marginBottom: "50px",

          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "14pt",
            marginBottom: "50px",

          },
          [theme.breakpoints.down("xs")]: {

          },
        }}
      >
        <h1>We're in the process of updating our products page.</h1>
      </Typography>
      <Typography
        variant="h1"
        sx={{
          width: "70%",
          fontSize: "22pt",
          marginBottom: "50px",
          [theme.breakpoints.down("lg")]: {

          },
          [theme.breakpoints.down("md")]: {
            fontSize: "16pt",
            marginBottom: "50px",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: "14pt",
            marginBottom: "50px",

          },
          [theme.breakpoints.down("xs")]: {

          },
        }}
      >
        <h1>Please check back soon!</h1>
      </Typography>
      <BlueButton>
        <Box>
          <Link to="/">
            <BlueButton
              variant="outlined"
              className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl"
              sx={{ width: 200, position: "relative", zIndex: 2 }}
            >
              Back home
            </BlueButton>
          </Link>
        </Box>
      </BlueButton>
    </MainContainer>
  );
}
