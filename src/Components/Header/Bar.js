import { useState } from "react";
import { Stack, Box, ButtonBase, Drawer } from "@mui/material";
import { Link } from "react-scroll";

//Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//Components
import Drawers from "./Bar/Drawers";

//Styles
import styles from "Styles/Header/Bar.styles";

const Bar = () => {
  const [drawer, setDrawer] = useState(false);
  const whatsappNumber = "+6282129182606";
  const message = "Hello, I'm interested in creating a website!";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  return (
    <Stack direction="row" sx={{ justifyContent: "right" }}>
      <ButtonBase sx={styles.SeeProjectBtn} onClick={handleWhatsAppClick}>
        Contact Us
        <WhatsAppIcon sx={{ ml: 1 }} />
      </ButtonBase>
      <ButtonBase
        sx={styles.ToogleButton}
        onClick={toggleDrawer(true)}
        className={drawer ? "active" : ""}
      >
        <Box className="ripple1"></Box>
        <Box className="ripple2"></Box>
        <Box className="ripple3"></Box>
      </ButtonBase>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={toggleDrawer(false)}
        ModalProps={{
          disableScrollLock: true,
        }}
        sx={styles.Drawer}
      >
        <Drawers toggleDrawer={toggleDrawer} />
      </Drawer>
    </Stack>
  );
};

export default Bar;
