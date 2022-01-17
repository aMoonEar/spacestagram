import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, CircularProgress } from "@mui/material";
import dateFormat from "dateformat";
import PhotoData from "../types/photoData";
import { PhotoCard } from "./photoCard";
import PhotoService from "../services/photoService";

export const PhotoGallery = (): JSX.Element => {
  const [lastDate] = React.useState<Date>(new Date());
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [photos, setPhotos] = React.useState<PhotoData[]>([]);

  React.useEffect(() => {
    getTenPhotos();
  }, []);

  // Retrieve the first ten photos to display to the user
  const getTenPhotos = () => {
    setLoading(true);
    // subtracting 10 days
    lastDate.setDate(lastDate.getDate() - 10);
    const formattedDate = dateFormat(lastDate, "yyyy-mm-dd");
    // Perform the API call
    PhotoService.addPhotos({
      startDate: formattedDate,
      setLoading,
      setPhotos,
      photos,
    });
  };

  // Make another API call to get the next ten photos
  const addTenPhotos = () => {
    setLoading(true);

    // Keep the original date and subtract 1 day
    const originalDate = lastDate;
    originalDate.setDate(lastDate.getDate() - 1);
    const formattedOriginalDate = dateFormat(lastDate, "yyyy-mm-dd");

    // subtracting 10 days
    lastDate.setDate(lastDate.getDate() - 10);
    const formattedDate = dateFormat(lastDate, "yyyy-mm-dd");
    // Perform the API call
    PhotoService.addPhotos({
      startDate: formattedDate,
      endDate: formattedOriginalDate,
      setLoading,
      setPhotos,
      photos,
    });
  };

  // Render the 'See More' button at the bottom of the page
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

  // Render the loading animation when photos are loading
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
