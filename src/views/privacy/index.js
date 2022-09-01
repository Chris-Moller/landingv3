import MainContainer from "components/shared-components/MainContainer";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function Privacy() {
  const theme = useTheme();

  return (
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
        paddingTop: "100px",
      },
    }}>
    <MainContainer sx={{ padding: "100px 0" }}>
      <div>
        <h1>Page - Privacy Policy</h1>
        <p>Coming Soon</p>
      </div>
    </MainContainer>
    </Box>
  );
}
