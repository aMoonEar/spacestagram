import * as React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export const Copyright = (): JSX.Element => {
  return (
    <Typography
      sx={{ marginTop: "80px", marginBottom: "60px" }}
      variant="body1"
      color="text.secondary"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://munir.xyz/">
        Munir Alsafi's Website
      </Link>{" "}
      {new Date().getFullYear()}.<br></br>Made with React Typescript
    </Typography>
  );
};
