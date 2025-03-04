import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
  return (
    <Box sx={styles.Container}>
      <Typography variant="h2" component="h2" sx={styles.Title}>
        Get Your Free
        <br />
        Professional Website
      </Typography>
      <Typography variant="h6" component="h6" sx={styles.Slogan}>
        Launch Your Business Online Today
      </Typography>
      <Typography variant="body1" component="p" sx={styles.Description}>
        Transform your business with a stunning website - completely free! No
        hidden fees, no credit card required. Get a professional,
        mobile-friendly website designed by experts.
      </Typography>
      <Link to="portfolio" spy={true} smooth={true} duration={500}>
        <ButtonBase sx={styles.Button}>
          Start Building Free
          <ArrowForwardTwoToneIcon />
        </ButtonBase>
      </Link>
    </Box>
  );
};
export default HeroContent;
