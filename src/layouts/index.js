import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "components/layout-components/Header";
import Footer from "components/layout-components/Footer";
import JoinTeam from "components/layout-components/JoinTeam";

function DashboardLayout() {
  return (
    <Box>
      <CssBaseline />
      <Header />
        <Outlet />
      <JoinTeam />
      <Footer />
    </Box>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
