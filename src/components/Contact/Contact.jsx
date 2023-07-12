import React from "react";
import { Container, Box, Typography, List, Link } from "@mui/material";
import { MapTwoTone, Telegram } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  blockWrapper: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    backgroundColor: theme.palette.background.default,
    boxShadow: "0 0 10px rgba(0,0,0,.1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "5rem",
    width: "5rem",
    margin: "1rem",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.backgroundColor, p: 5 }}>
      <Container>
        <Box sx={{ p: 5 }}>
          <Typography
            variant="h6"
            component="h6"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            Contact
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            sx={{ fontWeight: 700, mt: 2, mb: 4 }}
          >
            Don't be shy! Hit me up!
          </Typography>
          <List sx={{ display: "flex", gap: 10 }}>
            <Box className={classes.blockWrapper}>
              <Box className={classes.icon}>
                <MapTwoTone sx={{ fontSize: 40 }} color="primary" />
              </Box>
              <Box className={classes.content}>
                <Typography variant="h6" fontWeight="600">
                  Location
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="500"
                  sx={{ color: "text.secondary" }}
                >
                  Taganrog, Russia
                </Typography>
              </Box>
            </Box>
            <Box className={classes.blockWrapper}>
              <Box className={classes.icon}>
                <Telegram sx={{ fontSize: 40 }} color="primary" />
              </Box>
              <Box className={classes.content}>
                <Typography variant="h6" fontWeight="600">
                  Telegram
                </Typography>
                <Link
                  href="https://t.me/"
                  target="_blank"
                  sx={{
                    textDecoration: "none",
                    fontWeight: "500",
                    color: "text.secondary",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: (theme) => theme.palette.primary.main,
                    },
                  }}
                >
                  @sh1ckdev
                </Link>
              </Box>
            </Box>
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
