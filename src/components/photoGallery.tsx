import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
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
        <Button variant="contained" onClick={addTenPhotos}>
          See more
        </Button>
      );
    }
  };

  const renderIsLoading = () => {
    if (isLoading) {
      return <h1>loading...</h1>;
    }
  };

  return (
    <>
      {photos.map((photo) => (
        <PhotoCard
          date={photo.date}
          explanation={photo.explanation}
          title={photo.title}
          url={photo.url}
        />
      ))}
      {renderIsLoading()}
      {renderSeeMoreButton()}
    </>
  );
};

export default PhotoGallery;
