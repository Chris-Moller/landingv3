import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainContainer from "components/shared-components/MainContainer";
import BlueButton from "components/shared-components/BlueButton";
import { useTheme } from "@mui/material/styles";

export default function JoinTeam() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        padding: "70px 20px",
        backgroundColor: "#0A1017",
      }}
    >
      <MainContainer>
        <Typography variant="h3" sx={{ fontSize: "20px", fontWeight: 700 }}>
          Looking to join our team?
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "20px",
            margin: "20px auto 0",
            maxWidth: 550,
          }}
        >
          Come work with us at Eigenlayer to build the platforms for innovation
          and the next generation of features and applications on blockchains.
        </Typography>
        <BlueButton
          variant="outlined"
          className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl"
          sx={{ width: 140, marginTop: "20px",[theme.breakpoints.down("sm")]: {
            width: "90%",
          }, }}
          href="https://boards.greenhouse.io/layrlabs"
        >
          Apply Now
        </BlueButton>
      </MainContainer>
    </Box>
  );
}
