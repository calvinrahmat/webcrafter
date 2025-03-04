import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import { FacebookIcon } from "Utilis/Icons";

//Logo
import Logo from "Assets/header/logo.png";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
  return (
    <Box>
      <Box>
        <Image src={Logo} width={287} height={300} alt="Logo" />
      </Box>

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

export default FooterOne;
