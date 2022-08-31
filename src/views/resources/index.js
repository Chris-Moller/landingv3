import MainContainer from "components/shared-components/MainContainer";
import Typography from "@mui/material/Typography";

export default function Resources() {
  return (
    <MainContainer sx={{ padding: "10px 0", marginBottom: "50px", "& h2": {
      fontSize: "16pt", fontWeight: "700"
    } }}>
      <div>
        <Typography variant="h1" sx={{
           background:
           "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
         backgroundClip: "text",
         WebkitTextFillColor: "transparent",
         paddingBottom: "1.2rem",
         fontSize: "24pt",
         fontWeight: 700,
        }}>
        <h1>Featured videos</h1>
        </Typography>

        <p align="center">
        <h2>EigenLayr: Permissionless Feature Addition to Ethereum with Sreeram Kannan | a16z crypto research</h2>
        <iframe width="100%" height="400" style={{ paddingBottom: "20px" }} src="https://www.youtube.com/embed/-V-fG4J1N_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Eigenlayer @ ETHConomics Amsterdam</h2>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/01xDSwMO5U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br />
        <h2>Eigenspace @ ZKSummit 7 Amsterdam</h2>
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/OtUOXTqrSyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </p>
      </div>
    </MainContainer>
  );
}
