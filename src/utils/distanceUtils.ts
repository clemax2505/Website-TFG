import axios from 'axios';

const FRENCH_ZIP_CODE_REGEX = /^\d{5}$/;
const HOME_ZIP_CODE = "69410";
const HOME_ADDRESS = "69410 France"; // Home address to be used in the API request
const API_KEY = "AIzaSyBdduejZbESgRpm4wKScL3PQ4lARDbWyhQ"; // Replace with your actual API key
const FEE_PER_KM = 0.66; // Travel fee per kilometer

export const isValidZipCode = (zipCode: string): boolean => {
  return FRENCH_ZIP_CODE_REGEX.test(zipCode);
};

export const calculateTravelFee = async (zipCode: string): Promise<number> => {
  if (!isValidZipCode(zipCode) || zipCode === HOME_ZIP_CODE) {
    return 0;
  }

  const clientAddress = `${zipCode} France`;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${HOME_ADDRESS}&destinations=${clientAddress}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const distanceInMeters = response.data.rows[0].elements[0].distance.value;
    const distanceInKm = distanceInMeters / 1000;

    return distanceInKm * FEE_PER_KM;
  } catch (error) {
    console.error("Error fetching distance from Google Maps API:", error);
    return 0;
  }
};
