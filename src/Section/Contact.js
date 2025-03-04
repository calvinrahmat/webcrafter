import { Container, Button, Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//SectionHeading
import SectionHeading from "Utilis/SectionHeading";

//Styles
import styles from "Styles/Contact/Contact.styles";

const Contact = () => {
  const whatsappNumber = "+6282129182606";
  const message = "Hello, I'm interested in creating a website!";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      as="section"
      sx={styles.Container}
      id="contact"
    >
      <SectionHeading
        value1="Ready to Go Online?"
        value2="Start Your Free Website Now"
        border={true}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 4,
        }}
      >
        <Button
          variant="contained"
          color="success"
          size="large"
          startIcon={<WhatsAppIcon />}
          onClick={handleWhatsAppClick}
          sx={{
            fontSize: "1.1rem",
            padding: "12px 24px",
          }}
        >
          Chat on WhatsApp
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
