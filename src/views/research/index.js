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

export default function Research() {
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
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              marginBottom: "7px",
              fontSize: "22pt",
              background:
                "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              width: "75%",
            }}
          >
            <h1>
              Eigenlayer is comprised of researchers pushing the edge of
              innovation in the blockchain landscape.
            </h1>
          </Typography> 
          <Grid
            container
            sx={{
              marginTop: "2rem",

            }}
          >
            <Grid className="backdrop-blur-sm rounded-lg" item md={7} sx={{
                backgroundImage: "url(/images/research-bg.png)",
                  backgroundSize: "cover",
                [theme.breakpoints.down("xxl")]: {

                },
                [theme.breakpoints.down("xl")]: {

                },
                [theme.breakpoints.down("lg")]: {

                },
                [theme.breakpoints.down("md")]: {
                },
                [theme.breakpoints.down("sm")]: {

                },
            }}>
              <Paper
                sx={{
                  padding: "2rem",
                  borderRadius: "10px",
                  border: "solid",
                  borderWidth: "0.5px",
                  background: "none",
                  borderColor: "#817dac",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "18pt",
                    fontWeight: "100",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "100",
                    }}
                  >
                    Eigenlayer is comprised of a plethora of open-source
                    peer-reviewed research carried out by several members of the
                    Eigenlayer team in the past. Some research highlights are
                    shown below. Please visit{" "}
                    <a
                      style={{
                        color: "#a9b8f8",
                      }}
                      href="https://blockchain.ece.uw.edu"
                    >
                      blockchain.ece.uw.edu
                    </a>{" "}
                    for more details.
                  </h3>
                </Typography>
              </Paper>
            </Grid>
            <Grid item md={5} xs={12}>
              <Paper
                sx={{
                  backgroundImage: "url(/images/ResearchGraphic1.png)",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                  border: "solid",
                  borderWidth: "0.5px",
                  borderColor: "#817dac",
                  marginLeft: "1.25rem",
                  height: "100%",
                }}
              ></Paper>
            </Grid>
            
          </Grid>
        </Box>
        <Box
          component="section"
          sx={{
            marginTop: "26px",
            paddingBottom: "105px",
            [theme.breakpoints.down("xl")]: {
              marginTop: "60px",
            },
            [theme.breakpoints.down("lg")]: {
              marginTop: "40px",
            },
            [theme.breakpoints.down("md")]: {
              marginTop: "20px",
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
                  borderRadius: "10px",
                  padding: "36px 56px 84px",
                  height: "100%",
                  border: "solid",
                  borderWidth: "0.5px",
                  borderColor: "#817dac",
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
                        "linear-gradient(180deg, rgba(13,1,46,1) 13%, rgba(60,0,93,1) 100%)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ "&:after": { backgroundColor: "#5100d4" } }}
                    >
                      <span>Data availability</span>
                    </Typography>
                    <Typography>
                      Provisioning data availability is one of the key
                      components for scaling blockchains. Over the years, we
                      have done extensive research on how to reduce
                      communication complexity and per node bandwidth
                      requirement so as to hyperscale data availability without
                      compromising on security.
                    </Typography>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "10px" }}
                        href="https://arxiv.org/abs/1910.01247"
                      >
                        Coded Merkle Tree
                      </BlueButton>
                    </p>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "10px" }}
                        href="https://link.springer.com/chapter/10.1007/978-3-662-64331-0_16"
                      >
                        Data availability oracle
                      </BlueButton>
                    </p>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "10px" }}
                        href="https://www.usenix.org/conference/nsdi22/presentation/yang"
                      >
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
                        "linear-gradient(180deg, rgba(13,1,46,1) 13%, rgba(0,46,93,1) 100%)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ "&:after": { backgroundColor: "#0027d4" } }}
                    >
                      <span>Fair ordering</span>
                    </Typography>
                    <Typography>
                      Fair-ordering is a critical aspect for any blockchain. Its
                      absence imposes negative externalities like high gas
                      price, network congestion, wasted blockspace, etc., on the
                      ecosystem as a whole. As part of our research to mitigate
                      these externalities, we have designed protocols that
                      guarantees transaction fair-ordering despite adversarial
                      action to pursue transaction reordering, censoring or
                      chain reorg.
                    </Typography>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "10px" }}
                        href="https://dl.acm.org/doi/abs/10.1145/3494105.3526239"
                      >
                        Permissionless fair ordering
                      </BlueButton>
                      <h5>Best Paper @ Asia PKC</h5>
                    </p>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "10px" }}
                        href="https://eprint.iacr.org/2021/1465"
                      >
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
                        "linear-gradient(180deg, rgba(13,1,46,1) 13%, rgba(0,46,93,1) 100%)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ "&:after": { backgroundColor: "#0027d4" } }}
                    >
                      Consensus<span>(longest chain)</span>
                    </Typography>
                    <Typography>
                      The hallmarks of an excellent consensus protocol are high
                      throughput and low confirmation latency while placing as
                      minimal security assumptions as possible. Our research
                      involved analysing security assumptions of different
                      classes of longest-chain consensus protocols and
                      deconstructing them into their basic functionalities that
                      systematically yielded protocols which approach the
                      physical limits of throughput and confirmation latency
                      while requiring minimal security assumptions.
                    </Typography>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "20px" }}
                        href="https://dl.acm.org/doi/abs/10.1145/3319535.3363213"
                      >
                        Prism
                      </BlueButton>
                    </p>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "20px" }}
                        href="https://dl.acm.org/doi/abs/10.1145/3372297.3417290"
                      >
                        Everything is a race.
                      </BlueButton>
                    </p>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "20px" }}
                        href="https://link.springer.com/chapter/10.1007/978-3-662-64331-0_6"
                      >
                        PoSAT
                      </BlueButton>
                    </p>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ height: 100, width: "80%", marginTop: "20px" }}
                        href="https://eprint.iacr.org/2022/104"
                      >
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
                        "linear-gradient(180deg, rgba(13,1,46,1) 13%, rgba(60,0,93,1) 100%)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ "&:after": { backgroundColor: "#5100d4" } }}
                    >
                      Consensus<span>(BFT)</span>
                    </Typography>
                    <Typography>
                      BFT protocols provisions the guarantee that protocol is
                      secure as long as fraction of nodes behaving maliciously
                      is less than a certain threshold. Therefore, it is
                      necessary to have in-protocol mechanism to identify the
                      nodes in the system that behaved maliciously so as to be
                      able to impose proper penalties. Towards that end, we have
                      designed strong forensic support for BFT protocols.
                    </Typography>
                    <p align="center">
                      <BlueButton
                        variant="outlined"
                        className="hover:bg-gradient-to-r from-purple-grad to-blue-grad border border-solid rounded-2xl font-thin"
                        sx={{ width: "80%", marginTop: "20px" }}
                        href="https://dl.acm.org/doi/abs/10.1145/3460120.3484566"
                      >
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
    </Box>
  );
}
