import * as React from "react";
import Typography from "@mui/material/Typography";
import { Fade, Link } from "@mui/material";
import { transition } from "../utils/constants";
import Box from "@mui/material/Box";

export const Title = (): JSX.Element => {
  return (
    <Box sx={{ my: 25 }}>
      <Fade in={true} timeout={1500} easing={transition.easeInOut}>
        <Typography variant="h1" component="h1" gutterBottom>
          Spacestagram
        </Typography>
      </Fade>

      <Fade in={true} timeout={2100} easing={transition.easeInOut}>
        <Typography variant="h5" component="h4" gutterBottom>
          Image-sharing from the final frontier
        </Typography>
      </Fade>

      <Fade in={true} timeout={2500} easing={transition.easeInOut}>
        <p>
          Brought to you by &nbsp;
          <Link color="inherit" href="https://api.nasa.gov/#apod">
            NASA's Astronomy Picture of the Day API
          </Link>{" "}
        </p>
      </Fade>
    </Box>
  );
};
