import MainContainer from "components/shared-components/MainContainer";
// import { Link as RouterLink} from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { BsDiscord, BsTwitter, BsGithub } from "react-icons/bs";
import { useTheme } from "@mui/material/styles";

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

export default function Community() {
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
      }}
    >
      <MainContainer>
        <Box sx={{ height: "250px" }}>
          <Typography
            variant="h1"
            sx={{
              background:
                "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingBottom: "1.2rem",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            <h1>Connect with the Eigen community</h1>
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "6rem",
              marginTop: "20px",
            }}
          >
            <div
              onClick={() => {
                window.open("https://discord.com");
              }}
              className=" rounded-2xl border p-4 hover:bg-purple-grad cursor-pointer"
            >
              <BsDiscord
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            </div>
            <div
              onClick={() => {
                window.open("https://twitter.com/eigenlayer");
              }}
              className=" rounded-2xl border p-4 hover:bg-purple-grad cursor-pointer"
            >
              <BsTwitter
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            </div>
            <div
              onClick={() => {
                window.open("https://github.com");
              }}
              className=" rounded-2xl border p-4 hover:bg-purple-grad cursor-pointer"
            >
              <BsGithub
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            </div>
            {/* <div onClick={() => { window.open("https://youtube.com")}} className=" rounded-2xl border p-4 hover:bg-purple-grad cursor-pointer">
            <BsYoutube style={{
              width: "32px",
              height: "32px"
            }}/>
          </div> */}
          </Box>
        </Box>
        <TwitterTimelineEmbed sourceType="profile" screenName="eigenlayer" />
        <Box sx={{ height: "40px" }}></Box>
      </MainContainer>
    </Box>
  );
}
