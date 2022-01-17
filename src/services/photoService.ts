import axios from "axios";
import PhotoData from "../types/photoData";

type PhotoParameters = {
  startDate: string;
  endDate?: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPhotos: React.Dispatch<React.SetStateAction<PhotoData[]>>;
  photos: PhotoData[];
};

const addPhotos = async ({
  startDate,
  endDate,
  setLoading,
  setPhotos,
  photos,
}: PhotoParameters): Promise<PhotoData[] | undefined> => {
  let url: string;

  // Add the end date to the API request if there is one
  if (endDate) {
    url = `https://api.nasa.gov/planetary/apod?api_key=ykzQINaucAEoc1RW6I3CqVke24wjlu9JAyrDVcKd&start_date=${startDate}&end_date=${endDate}`;
  } else {
    url = `https://api.nasa.gov/planetary/apod?api_key=ykzQINaucAEoc1RW6I3CqVke24wjlu9JAyrDVcKd&start_date=${startDate}`;
  }

  try {
    axios.get<PhotoData[]>(url).then((response) => {
      setLoading(false);
      // Reverse the photos so they appear in chronological order
      const newPhotos: PhotoData[] = response.data.reverse();

      // Combine the two arrays
      setPhotos(photos.concat(newPhotos));
    });
  } catch {
    console.error("There was an error retrieving the data");
    return undefined;
  }
};

const PhotoService = {
  addPhotos,
};

export default PhotoService;
