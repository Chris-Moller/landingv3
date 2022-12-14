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
import CustomMenu from "utils/CustomMenu";

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
  const [prodOpened, setProdOpen] = useState(false);
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
        width: 300,
        paddingTop: "20px",
        "& .MuiListItem-root": {
          padding: "10px 10px 0",
        },
        "& .MuiListItemButton-root": {
          borderRadius: "10px",
          fontWeight: 600,
          "&:hover": { backgroundColor: "#202025", fontWeight: 700 },
        },
      }}
    >
      <List>
        <ListItem key="EigenLayer" disablePadding>
          <ListItemButton onClick={() => navigate("/EigenLayer")}>
            <ListItemText primary="EigenLayer" />
          </ListItemButton>
        </ListItem>
        <ListItem key="EigenDA" disablePadding>
          <ListItemButton onClick={() => navigate("/EigenDA")}>
            <ListItemText primary="EigenDA" />
          </ListItemButton>
        </ListItem>
        {/* <ListItem key="Community" disablePadding>
          <ListItemButton onClick={() => navigate("/community")}>
            <ListItemText primary="Community" />
          </ListItemButton>
        </ListItem> */}
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
          [theme.breakpoints.down("sm")]: {
            paddingLeft: "10px",
            paddingRight: "10px",
          },
        }}
      >
        <MainContainer
          sx={{
            height: "70px",
            display: "flex",
            [theme.breakpoints.down("lg")]: {
              maxWidth: 870,
            },
            [theme.breakpoints.down("md")]: {
              maxWidth: 550,
            },

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
            sx={{
              justifyContent: "space-between",
              alignItems: "end",
              display: "flex",
            }}
          >
            <Grid
              item
              sx={{
                width: 50,
                display: "flex",
                flexDirection: "row",
                paddingBottom: "20px",
                "& img": {
                  marginRight: "10px",
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
              <img
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  cursor: "pointer",
                  margin: "auto",
                }}
                src="/images/EigenPlaceHolder.png"
                alt=""
              />
              <h1
                style={{
                  cursor: "pointer",
                  margin: "auto",
                }}
              >
                EigenLayer
              </h1>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                marginLeft: "13%",
                [theme.breakpoints.down("md")]: { display: "none" },
              }}
            >
              <Grid
                container
                spacing={5}
                component="ul"
                sx={{
                  "& li.MuiGrid-item": {
                    paddingLeft: "80px",
                    paddingBottom: "18px",
                  },
                }}
              >
                <Grid
                  onMouseEnter={() => setProdOpen(true)}
                  onMouseLeave={() => setProdOpen(false)}
                  item
                  component="li"
                  sx={{ position: "relative" }}
                >
                  <Link to="/EigenLayer">Products</Link>
                  {prodOpened ? <CustomMenu setProdOpen={setProdOpen} /> : null}
                </Grid>
                {/* <Grid item component="li">
                  <Link to="/community">Community</Link>
                </Grid> */}
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
                paddingBottom: "14px",
                [theme.breakpoints.up("md")]: { visibility: "hidden" },
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
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            style={{
              cursor: "pointer",
              width: "40px",
              height: "40px",
              marginTop: "24px",
              marginLeft: "10px",
            }}
            src="/images/EigenPlaceHolder.png"
            alt=""
          />
          <Typography
            sx={{
              padding: "24px 7px 0",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "2px",
            }}
          >
            Eigenlayer
          </Typography>
        </div>
        {list()}
      </Drawer>
    </Box>
  );
}
