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


export default function Solutions() {
  const theme = useTheme();

  return (
    <MainContainer sx={{ padding: "100px 0" }}>
      <div>
         <Box>        
          <h1>Research:</h1>
        <p align="center"></p>
        </Box>
         <Box
        component="section"
        sx={{
          marginTop: "226px",
          paddingBottom: "105px",
          [theme.breakpoints.down("xl")]: {
            marginTop: "200px",
          },
          [theme.breakpoints.down("lg")]: {
            marginTop: "170px",
          },
          [theme.breakpoints.down("md")]: {
            marginTop: "30px",
          },
          [theme.breakpoints.down("sm")]: {
            marginTop: "10px",
          },
        }}
      >
        <MainContainer>
          {/* <Typography
            variant="h3"
            sx={{
              fontSize: "28px",
              fontWeight: 400,
              textAlign: "center",
              "& span": { fontWeight: 700 },
            }}
          >
            Explore the <span>Solutions</span>
          </Typography>
          <Typography
            sx={{ textAlign: "center", marginTop: "28px", fontWeight: 600 }}
          >
            Our products provide cryptoeconomic security for services and
            companies in modular blockchain layers.
          </Typography> */}
          <Box
            sx={{
              maxWidth: 1170,
              margin: "58px auto 0",
              "& .my-card": {
                backgroundColor: "#121927",
                borderRadius: "5px",
                padding: "36px 56px 84px",
                height: "100%",
                [theme.breakpoints.down("lg")]: {
                  padding: "36px 36px 64px",
                },
              },
              "& h4": {
                fontSize: "28px",
                fontWeight: 400,
                lineHeight: 2.1,
                "& span": { fontWeight: 700 },
                position: "relative",
                "&:after": {
                  content: "''",
                  display: "block",
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: 25,
                  height: 3,
                  borderRadius: "10px",
                },
              },
              "& p": {
                fontWeight: 600,
                lineHeight: 1.875,
                marginTop: "25px",
              },
            }}
          >
            <Grid container spacing={2.5}>
              <Grid item md={6} xs={12}>
                <Paper
                  className="my-card"
                  sx={{
                    cursor: "pointer",                    
                      background:
                        "linear-gradient(180deg, rgba(18, 25, 39, 0) 0%, rgba(18, 25, 39, 0.25) 54.69%, rgba(206, 137, 33, 0.5) 100%)",                  
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ "&:after": { backgroundColor: "#CE8921" } }}
                  >
                    <span>Data availability</span>
                  </Typography>
                  <Typography>
                  Provisioning data availability is one of the key components for scaling blockchains. Over the years, we have done extensive research on how to reduce communication complexity and per node bandwidth requirement so as to hyperscale data availability without compromising on security.
                  </Typography>
                  <p align="center">
                  <BlueButton sx={{ width: 200, marginTop: "10px" }} href="https://arxiv.org/abs/1910.01247">
                  Coded Merkle Tree
              </BlueButton>
              </p>              
              <p align="center">
              <BlueButton sx={{ width: 200, marginTop: "10px" }} href="https://link.springer.com/chapter/10.1007/978-3-662-64331-0_16">
                  Data availability oracle
              </BlueButton>
              </p>              
              <p align="center">
              <BlueButton sx={{ width: 200, marginTop: "10px" }} href="https://www.usenix.org/conference/nsdi22/presentation/yang">
                  Dispersed Ledger
              </BlueButton>     
              </p>         
                </Paper>
              </Grid>
              <Grid item md={6} xs={12}>
                <Paper
                  className="my-card"
                  sx={{
                    cursor: "pointer",
                    
                      background:
                        "linear-gradient(180deg, rgba(18, 25, 39, 0) 0%, rgba(18, 25, 39, 0.25) 54.69%, rgba(44, 138, 98, 0.5) 100%)",                    
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ "&:after": { backgroundColor: "#2C8A62" } }}
                  >
                  <span>Fair ordering</span>
                  </Typography>
                  <Typography>
                  Fair-ordering is a critical aspect for any blockchain. Its absence imposes negative externalities like high gas price, network congestion, wasted blockspace, etc., on the ecosystem as a whole. As part of our research to mitigate these externalities, we have designed protocols that guarantees transaction fair-ordering despite adversarial action to pursue transaction reordering, censoring or chain reorg.
                  </Typography>
                  <p align="center">
                  <BlueButton sx={{width: 250, marginTop: "10px" }} href="https://dl.acm.org/doi/abs/10.1145/3494105.3526239">
Permissionless fair ordering 
              </BlueButton>
              <h5>Best Paper @ Asia PKC</h5>
              </p>             
              <p align="center">
                  <BlueButton sx={{ width: 250, marginTop: "10px" }} href="https://eprint.iacr.org/2021/1465">
                  Themis
              </BlueButton>
              </p>              
                </Paper>              
              </Grid>
              <Grid item md={6} xs={12}>
                <Paper
                  className="my-card"
                  sx={{
                    cursor: "pointer",
                    
                      background:
                        "linear-gradient(180deg, rgba(18, 25, 39, 0) 0%, rgba(18, 25, 39, 0.25) 54.69%, rgba(44, 138, 98, 0.5) 100%)",                    
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ "&:after": { backgroundColor: "#2C8A62" } }}
                  >
                  Consensus<span>(longest chain)</span>
                  </Typography>
                  <Typography>
                  The hallmarks of an excellent consensus protocol are high throughput and low confirmation latency while placing as minimal security assumptions as possible. Our research involved analysing security assumptions of different classes of longest-chain consensus protocols and deconstructing them into their basic functionalities that systematically yielded protocols which approach the physical limits of throughput and confirmation latency while requiring minimal security assumptions.
                  </Typography>
                  <p align="center">
                  <BlueButton sx={{ width: 200, marginTop: "20px" }} href="https://dl.acm.org/doi/abs/10.1145/3319535.3363213">
                Prism
              </BlueButton>
              </p>
              <p align="center">
              <BlueButton sx={{ width: 200, marginTop: "20px" }} href="https://dl.acm.org/doi/abs/10.1145/3372297.3417290">
                Everything is a race. 
              </BlueButton>
              </p>              
              <p align="center">
              <BlueButton sx={{ width: 200, marginTop: "20px" }} href="https://link.springer.com/chapter/10.1007/978-3-662-64331-0_6">
                PoSAT
              </BlueButton>
              </p>
              <p align="center">
              <BlueButton sx={{ height: 100, width: 200, marginTop: "20px" }} href="https://eprint.iacr.org/2022/104">
              Minotaur: Multi-Resource Blockchain Consensus
              </BlueButton>
              </p>
                </Paper>              
              </Grid>
              <Grid item md={6} xs={12}>
                <Paper
                  className="my-card"
                  sx={{
                    cursor: "pointer",                    
                      background:
                        "linear-gradient(180deg, rgba(18, 25, 39, 0) 0%, rgba(18, 25, 39, 0.25) 54.69%, rgba(206, 137, 33, 0.5) 100%)",                  
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ "&:after": { backgroundColor: "#2C8A62" } }}
                  >
                  Consensus<span>(BFT)</span>
                  </Typography>
                  <Typography>
                  BFT protocols provisions the guarantee that protocol is secure as long as fraction of nodes behaving maliciously is less than a certain threshold. Therefore, it is necessary to have in-protocol mechanism to identify the nodes in the system that behaved maliciously so as to be able to impose proper penalties. Towards that end, we have designed strong forensic support for BFT protocols.
                  </Typography>
                  <p align="center">
                  <BlueButton sx={{ width: 200, marginTop: "20px" }} href="https://dl.acm.org/doi/abs/10.1145/3460120.3484566">
                BFT protocol forensics
              </BlueButton>
              </p>
                </Paper>              
              </Grid>

            </Grid>
          </Box>
        </MainContainer>
      </Box>
      </div>
    </MainContainer>
  );
}
