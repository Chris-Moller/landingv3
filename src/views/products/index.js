import MainContainer from "components/shared-components/MainContainer";
// import { Link as RouterLink} from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
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
    <MainContainer sx={{ padding: "100px 0", minHeight: "600px" }}>
      
    </MainContainer>
  );
}
