import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BlueButton = styled(Button)(() => ({
  fontSize: "16px",
  fontWeight: 700,
  height: 45,
  borderRadius: "5px",
  color: "#ECFCFF",
  transition: "0.5s",
  "&:hover": {
    transition: ".5s"
  },
}));

export default BlueButton