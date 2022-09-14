import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const MainContainer = styled(Box)(({ theme }) => ({
  maxWidth: 1300,
  margin: "auto",

  [theme.breakpoints.down("xl")]: { maxWidth: 1000 },
  [theme.breakpoints.down("lg")]: { maxWidth: 750 },
  [theme.breakpoints.down("md")]: { maxWidth: 600 },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "450px",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "450px",
    padding: "0 0px"
  },
}));

export default MainContainer;
