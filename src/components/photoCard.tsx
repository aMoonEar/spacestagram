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

// every card has:
// image, like button, title, explanation, date

// make another component that takes a start and end date and returns the images in that set (inclusive)

type PhotoCardProps = {
  date: string;
  explanation: string;
  title: string;
  url: string;
};

// margin-right: -15px;
//     margin-top: -32px;
//     margin-bottom: -28px;
//     margin-left: -35px;

export const PhotoCard = ({
  date,
  explanation,
  title,
  url,
}: PhotoCardProps): JSX.Element => {
  const [isLiked, setLiked] = React.useState<boolean>(false);

  const renderLikeButton = (): JSX.Element => {
    return (
      <>
        <Button
          onClick={() => setLiked(!isLiked)}
          variant="contained"
          size="small"
          startIcon={
            <Box
              sx={{
                marginBottom: "-40px",
                marginTop: "-32px",
                marginLeft: "-28px",
                marginRight: "-20px",
              }}
            >
              <Heart isClick={isLiked} onClick={() => setLiked(!isLiked)} />
            </Box>
          }
        >
          {isLiked ? "Unlike" : "like"}
        </Button>
      </>
    );
  };

  return (
    <Card
      sx={{ maxWidth: 500, margin: "auto", marginTop: "100px", boxShadow: 15 }}
    >
      <CardMedia
        component="img"
        // height="600"
        image={url}
        alt={title}
      />
      <CardContent sx={{ mx: 5 }}>
        <Typography
          sx={{
            marginTop: "30px",
          }}
          gutterBottom
          variant="h2"
          component="div"
        >
          {title}
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          {dateFormat(date, "dddd, mmmm dS, yyyy")}
        </Typography>
        <Typography sx={{ marginTop: 4 }}>{explanation}</Typography>
      </CardContent>
      <CardActions>{renderLikeButton()}</CardActions>
    </Card>
  );
};
