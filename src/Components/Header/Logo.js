import { Box } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";

//Logos
import Logos from "Assets/header/logo.png";

const Logo = () => {
  return (
    <Box sx={{ mt: "2px", a: { cursor: "pointer" } }}>
      <Link to="home" spy={true} smooth={true} duration={500}>
        <Box
          component="img"
          src={Logos}
          alt="Logo"
          sx={{
            width: "auto",
            height: { xxl: "200px", xxs: "150px" },
            cursor: "pointer",
          }}
        />
      </Link>
    </Box>
  );
};
export default Logo;
