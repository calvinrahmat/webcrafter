const styles = {
  Navs: {
    textAlign: "center",
    a: {
      m: "0 12px",
      "&.active": {
        button: {
          color: "primary.main",
        },
      },
    },
  },
  Buttons: {
    fontSize: {
      xl: "18px",
      lg: "17px",
      md: "16px",
    },
    borderRadius: "5px",
    p: "8px 16px",
    fontWeight: 600,
    transition: "0.2s ease",
    "&:hover": {
      color: "primary.main",
    },
  },
};

export default styles;
