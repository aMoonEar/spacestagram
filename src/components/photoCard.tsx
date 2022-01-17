import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import dateFormat from "dateformat";
// @ts-ignore
import Heart from "react-animated-heart";

type PhotoCardProps = {
  date: string;
  explanation: string;
  title: string;
  url: string;
  media_type: string;
};

export const PhotoCard = ({
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
        <Button
          onClick={() => setLiked(!isLiked)}
          variant="contained"
          size="small"
          sx={{
            width: "130px",
          }}
          startIcon={
            <Box
              sx={{
                marginBottom: "-40px",
                marginTop: "-32px",
                marginLeft: "-50px",
                marginRight: "-30px",
              }}
            >
              <Heart isClick={isLiked} onClick={() => setLiked(!isLiked)} />
            </Box>
          }
        >
          <Typography sx={{ width: "40px" }}>
            {isLiked ? "Unlike" : "like"}
          </Typography>
        </Button>
      </>
    );
  };

  return (
    <Card
      sx={{ maxWidth: 700, margin: "auto", marginTop: "100px", boxShadow: 3 }}
    >
      <CardMedia
        component={media_type == "video" ? "iframe" : "img"}
        height={media_type == "video" ? "600" : ""}
        src={url}
      />
      <CardContent sx={{ mx: 2 }}>
        <Typography
          sx={{
            marginTop: "30px",
          }}
          gutterBottom
          variant="h2"
        >
          {title}
        </Typography>
        {renderLikeButton()}
        <Typography sx={{ marginTop: 2 }}>{explanation}</Typography>
        <Typography sx={{ marginTop: 2 }} variant="body2" gutterBottom>
          {dateFormat(date, "mmmm dS, yyyy")}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
