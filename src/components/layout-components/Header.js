import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import IconButton from "@mui/material/IconButton";
import MainContainer from "components/shared-components/MainContainer";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Link = styled(RouterLink)(() => ({
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: 400,
  color: "white",
  position: "relative",
  "&:after": {
    content: "''",
    display: "block",
    position: "absolute",
    bottom: -12,
    left: 0,
    width: 0,
    height: 3,
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
    transition: "all .2s ease-out",
  },
  "&:hover": {
    fontWeight: 500,
    color: "#ECFCFF",
    "&:after": {
      width: 25,
    },
  },
}));

export default function TemporaryDrawer() {
  const [isOpened, setIsOpened] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpened(open);
    console.log("Open!")
  };

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        width: 250,
        paddingTop: "20px",
        "& .MuiListItem-root": { padding: "10px 10px 0" },
        "& .MuiListItemButton-root": {
          borderRadius: "10px",
          fontWeight: 600,
          "&:hover": { backgroundColor: "#202025", fontWeight: 700 },
        },
      }}
    >
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="resources" disablePadding>
          <ListItemButton onClick={() => navigate("/resources")}>
            <ListItemText primary="Resources" />
          </ListItemButton>
        </ListItem>
        <ListItem key="careers" disablePadding>
          <ListItemButton onClick={() => navigate("/careers")}>
            <ListItemText primary="Careers" />
          </ListItemButton>
        </ListItem>
        <ListItem key="research" disablePadding>
          <ListItemButton onClick={() => navigate("/research")}>
            <ListItemText primary="Research" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem key="terms" disablePadding>
          <ListItemButton onClick={() => navigate("/terms")}>
            <ListItemText primary="Terms & Conditions" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Box>
  );

  return (
    <Box>
      <Box
        className="bg-black text-2xl backdrop-blur-sm"
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 99,
          height: "70px",
        }}
      >
        <MainContainer
          sx={{
            height: "70px",
            display: "flex",
            // transition: "all .3s ease-out",
            // marginTop: scrollPosition > 100 ? "20px" : "69px",
            // marginBottom: scrollPosition > 100 ? "20px" : "30px",
            // [theme.breakpoints.down("xl")]: {
            //   marginTop: scrollPosition > 100 ? "20px" : "54px",
            //   marginBottom: scrollPosition > 100 ? "20px" : "30px",
            // },
            // [theme.breakpoints.down("lg")]: {
            //   marginTop: scrollPosition > 100 ? "20px" : "42px",
            //   marginBottom: scrollPosition > 100 ? "20px" : "24px",
            // },
            // [theme.breakpoints.down("sm")]: {
            //   marginTop: "20px",
            //   marginBottom: "20px",
            // },
          }}
        >
          <Grid
            container
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Grid
              item
              sx={{
                width: 50,
                display: "flex",
                flexDirection: "row",
                "& img": {
                  marginRight: "5px",
                  width: "32px",
                },
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              {/* <Button
                onClick={() => navigate("/")}
                sx={{ padding: 0, minWidth: "unset" }}
              >
                <img src="/images/logo.svg" width={64} height={64} alt="Logo" />
              </Button>
                             */}
              <img src="/images/EigenPlaceHolder.png" alt="" />
              <h1
                style={{
                  cursor: "pointer",
                }}
              >
                EigenLayer
              </h1>
            </Grid>
            <Grid
              item
              sx={{ [theme.breakpoints.down("sm")]: { display: "none" } }}
            >
              <Grid
                container
                spacing={5}
                component="ul"
                sx={{ marginBottom: 0 }}
              >
                <Grid item component="li">
                  <Link to="/products">Products</Link>
                </Grid>
                <Grid item component="li">
                  <Link to="/community">Community</Link>
                </Grid>
                <Grid item component="li">
                  <Link to="/resources">Resources</Link>
                </Grid>
                <Grid item component="li">
                  <Link to="/careers">Careers</Link>
                </Grid>
                <Grid item component="li">
                  <Link to="/research">Research</Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                width: 50,
                textAlign: "right",
                [theme.breakpoints.up("sm")]: { visibility: "hidden" },
              }}
            >
              <IconButton onClick={toggleDrawer(true)}>
                <MenuOpenIcon />
              </IconButton>
            </Grid>
          </Grid>
        </MainContainer>
      </Box>

      <Drawer
        anchor="right"
        open={isOpened}
        onClose={toggleDrawer(false)}
        sx={{ backgroundColor: "#000308" }}
      >
        <Typography
          sx={{
            padding: "24px 24px 0",
            fontSize: "30px",
            fontWeight: 700,
            letterSpacing: "2px",
          }}
        >
          Eigenlayer
        </Typography>
        {list()}
      </Drawer>
    </Box>
  );
}
