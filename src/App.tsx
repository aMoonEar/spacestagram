import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PhotoGallery from "./components/photoGallery";
import { Title } from "./components/title";
import { Copyright } from "./components/copyright";

export default function App() {
  console.log = console.warn = console.error = () => {};
  document.title = "Spacestagram";

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
