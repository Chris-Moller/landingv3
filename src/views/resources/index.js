import MainContainer from "components/shared-components/MainContainer";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function Resources() {
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
          paddingTop: "150px",
        },
      }}
    >
      <MainContainer
        sx={{
          padding: "10px 0",
          marginBottom: "50px",
          "& h2": {
            fontSize: "16pt",
            fontWeight: "700",
          },
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          [theme.breakpoints.down("xs")]: {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      >
        <div>
          <Typography
            variant="h1"
            sx={{
              background:
                "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingBottom: "1.2rem",
              fontSize: "28pt",
              fontWeight: 700,
              [theme.breakpoints.down("sm")]: {
                textAlign: "center"
              },
            }}
          >
            <h1>Featured videos</h1>
          </Typography>

          <p align="center">
          <h2>
          Sreeram Kannan: Censorship Resistance Via Restaking - SBC 2022
            </h2>
            <iframe
              width="100%"
              style={{ paddingBottom: "20px", aspectRatio: "16 / 9" }}
              src="https://www.youtube.com/embed/ywJNXIUSqOw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2>
              a16z Crypto: Permissionless Feature Addition to Ethereum with
              Sreeram Kannan
            </h2>
            <iframe
              width="100%"
              style={{ paddingBottom: "20px", aspectRatio: "16 / 9" }}
              src="https://www.youtube.com/embed/-V-fG4J1N_M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2>Eigenlayer @ ETHConomics Amsterdam</h2>
            <iframe
              width="100%"
              style={{ aspectRatio: "16 / 9" }}
              src="https://www.youtube.com/embed/01xDSwMO5U4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <br />
            <h2>Eigenspace @ ZKSummit 7 Amsterdam</h2>
            <iframe
              width="100%"
              style={{ aspectRatio: "16 / 9" }}
              src="https://www.youtube.com/embed/OtUOXTqrSyg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>{" "}
          </p>
        </div>
      </MainContainer>
    </Box>
  );
}
