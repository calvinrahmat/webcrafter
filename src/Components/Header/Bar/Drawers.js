import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";

//Icons
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { FacebookIcon } from "Utilis/Icons";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
  return (
    <Box>
      <Stack direction="row" sx={{ alignItems: "center" }}>
        <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
          <CloseRoundedIcon />
        </ButtonBase>
      </Stack>
      <Typography variant="body1" component="p" sx={styles.Description}>
        We are Webcrafter Studio, a group of people passionate about solving
        problems with the power of code. We have more than 4+ professional
        experience in different domains and clients. Our problem-solving skills
        help us to create a great product for you. We are always available to
        help your dream projects come true.
      </Typography>
      <Box sx={styles.Navs}>
        {Navs &&
          Navs.map((nav, i) => (
            <Scroll
              key={i}
              activeClass="active"
              to={nav.Id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleDrawer(false)}
            >
              <ButtonBase sx={styles.Buttons}>{nav.name}</ButtonBase>
            </Scroll>
          ))}
      </Box>
      <Stack direction="row" sx={styles.Address}></Stack>

      <Stack direction="row" sx={styles.Social}>
        <Link href="https://www.facebook.com/codestation21">
          <a target="_blank">
            <ButtonBase>
              <FacebookIcon />
            </ButtonBase>
          </a>
        </Link>
      </Stack>
    </Box>
  );
};
export default Drawers;
