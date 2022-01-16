import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PhotoGallery from "./components/photoGallery";
import { Title } from "./components/title";
import { Copyright } from "./components/copyright";
// API KEY: ykzQINaucAEoc1RW6I3CqVke24wjlu9JAyrDVcKd

// get todays date
// subtract 5 days from todays date
// show the first 5 images from last 5 days
// have a see more buttonn
// adds 5 more images to the total array

// other
// hide my api key in the gitignore
//

// extras
// add a animation while its loading
// add an animation when u like the button
// add a date range of the photos that you want to see

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Title />
        <PhotoGallery />
        <Copyright />
      </Box>
    </Container>
  );
}
