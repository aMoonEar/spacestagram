import axios, { AxiosResponse } from "axios";
import PhotoData from "../types/photoData";

type PhotoParameters = {
  startDate: string;
  endDate?: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPhotos: React.Dispatch<React.SetStateAction<PhotoData[]>>;
  photos: PhotoData[];
};

// add a date range here
const addPhotos = async ({
  startDate,
  endDate,
  setLoading,
  setPhotos,
  photos,
}: PhotoParameters): Promise<PhotoData[] | undefined> => {
  let url: string;

  if (endDate) {
    url = `https://api.nasa.gov/planetary/apod?api_key=ykzQINaucAEoc1RW6I3CqVke24wjlu9JAyrDVcKd&start_date=${startDate}&end_date=${endDate}`;
  } else {
    url = `https://api.nasa.gov/planetary/apod?api_key=ykzQINaucAEoc1RW6I3CqVke24wjlu9JAyrDVcKd&start_date=${startDate}`;
  }

  try {
    axios.get<PhotoData[]>(url).then((response) => {
      setLoading(false);
      const newPhotos: PhotoData[] = response.data.reverse();

      // reverse so that it appears in order of date
      setPhotos(photos.concat(newPhotos));
      // setPhotos([...photos, response.data.reverse()]);
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
