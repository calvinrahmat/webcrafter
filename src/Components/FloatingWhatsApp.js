import { Box, IconButton, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingWhatsApp = () => {
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
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 25, md: 35 },
        right: { xs: 25, md: 35 },
        zIndex: 1000,
      }}
    >
      <Tooltip title="Chat on WhatsApp" placement="left">
        <IconButton
          onClick={handleWhatsAppClick}
          sx={{
            backgroundColor: "#25D366",
            color: "white",
            width: { xs: 75, md: 90 },
            height: { xs: 75, md: 90 },
            "&:hover": {
              backgroundColor: "#128C7E",
              transform: "scale(1.1)",
            },
            transition: "all 0.3s ease",
            boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            animation: "pulse 2s infinite",
            "@keyframes pulse": {
              "0%": {
                boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.6)",
              },
              "70%": {
                boxShadow: "0 0 0 20px rgba(37, 211, 102, 0)",
              },
              "100%": {
                boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
              },
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: { xs: 45, md: 55 } }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FloatingWhatsApp;
