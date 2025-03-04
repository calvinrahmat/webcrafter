import { useState, useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";
import Bar from "Components/Header/Bar";

//Styles
import styles from "Styles/Header/Header.styles";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <Box
      className={scroll ? "sticky" : ""}
      sx={styles.Container}
      component="header"
    >
      <Container maxWidth={false} disableGutters>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item md={3} xxs={6}>
            <Logo />
          </Grid>
          <Grid
            item
            md={9}
            xxs={6}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Box sx={{ display: { md: "block", xxs: "none" } }}>
              <Nav />
            </Box>
            <Box sx={{ display: { md: "none", xxs: "block" } }}>
              <Bar />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Header;
