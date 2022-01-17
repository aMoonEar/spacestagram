import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import dateFormat from "dateformat";
// import PhotoService from "../services/photoService";
import PhotoData from "../types/photoData";
import axios from "axios";
import { PhotoCard } from "./photoCard";
import PhotoService from "../services/photoService";

// every card has:
// image, like button, title, explanation, date

// make another component that takes a start and end date and returns the images in that set (inclusive)

export const PhotoGallery = (): JSX.Element => {
  const [lastDate] = React.useState<Date>(new Date());
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [photos, setPhotos] = React.useState<PhotoData[]>([]);

  React.useEffect(() => {
    getTenPhotos();
  }, []);

  const getTenPhotos = () => {
    setLoading(true);
    // subtracting 10 days
    lastDate.setDate(lastDate.getDate() - 10);
    const formattedDate = dateFormat(lastDate, "yyyy-mm-dd");
    // api call
    PhotoService.addPhotos({
      startDate: formattedDate,
      setLoading,
      setPhotos,
      photos,
    });
  };

  const addTenPhotos = () => {
    setLoading(true);

    const originalDate = lastDate;
    originalDate.setDate(lastDate.getDate() - 1);
    const formattedOriginalDate = dateFormat(lastDate, "yyyy-mm-dd");

    // subtracting 10 days
    lastDate.setDate(lastDate.getDate() - 10);
    const formattedDate = dateFormat(lastDate, "yyyy-mm-dd");
    // api call
    PhotoService.addPhotos({
      startDate: formattedDate,
      endDate: formattedOriginalDate,
      setLoading,
      setPhotos,
      photos,
    });
  };

  const renderSeeMoreButton = () => {
    if (!isLoading) {
      return (
        <Box textAlign="center" sx={{ marginTop: "40px" }}>
          <Button
            sx={{ margin: "auto" }}
            variant="contained"
            onClick={addTenPhotos}
          >
            See more
          </Button>
        </Box>
      );
    }
  };

  const renderIsLoading = () => {
    if (isLoading) {
      return (
        <Box sx={{ marginTop: "60px" }} textAlign="center">
          <CircularProgress color="secondary" />
          <Typography>Fetching images from space...</Typography>
        </Box>
      );
    }
  };

  return (
    <>
      {photos.map((photo) => (
        <PhotoCard
          key={photo.title}
          date={photo.date}
          explanation={photo.explanation}
          title={photo.title}
          url={photo.url}
          media_type={photo.media_type}
        />
      ))}
      {renderIsLoading()}
      {renderSeeMoreButton()}
    </>
  );
};

export default PhotoGallery;
