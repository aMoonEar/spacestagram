import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import dateFormat from "dateformat";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// @ts-ignore
import Heart from "react-animated-heart";

type PhotoCardProps = {
  copyright?: string;
  date: string;
  explanation: string;
  title: string;
  url: string;
  media_type: string;
};

export const PhotoCard = ({
  copyright,
  date,
  explanation,
  title,
  url,
  media_type,
}: PhotoCardProps): JSX.Element => {
  const [isLiked, setLiked] = React.useState<boolean>(false);

  // Render the like button that every photo contains
  const renderLikeButton = (): JSX.Element => {
    return (
      <>
        <Box>
          <Button
            sx={{
              minWidth: "20px",
            }}
            variant={isLiked ? "contained" : "outlined"}
            onClick={() => setLiked(!isLiked)}
            color="primary"
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
        </Box>
      </>
    );
  };

  const renderPhotographer = (): JSX.Element | undefined => {
    if (copyright) {
      return (
        <Box sx={{ display: "flex", float: "left", marginBottom: 2 }}>
          <CameraAltIcon />
          <Typography sx={{ paddingLeft: 2 }} variant="h3">
            {copyright}
          </Typography>
        </Box>
      );
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 700,
        margin: "auto",
        marginTop: "100px",
        boxShadow: 0,
        backgroundColor: "#fafafa",
      }}
    >
      {renderPhotographer()}

      <CardMedia
        component={media_type == "video" ? "iframe" : "img"}
        height={media_type == "video" ? "600" : ""}
        src={url}
      />
      <CardContent sx={{ mx: 0 }}>
        <Typography
          sx={{
            marginTop: "0px",
          }}
          gutterBottom
          variant="h2"
        >
          {title}
        </Typography>
        <Typography sx={{ marginTop: -1 }} variant="body2" gutterBottom>
          {dateFormat(date, "mmmm dS, yyyy")}
        </Typography>
        {renderLikeButton()}
        {/* <Typography sx={{ marginTop: 2 }}>{explanation}</Typography> */}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
