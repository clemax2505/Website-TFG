import { Client } from "@googlemaps/google-maps-services-js";

const GOOGLE_MAPS_API_KEY = process.env.VITE_GOOGLE_MAPS_API_KEY;
const BASE_LOCATION = "69410"; // Code postal de base

const client = new Client({});

// Function to check if a zip code is valid (French postal code format)
export const isValidZipCode = (zipCode: string): boolean => {
  return /^\d{5}$/.test(zipCode);
};

// Function to calculate travel fee based on actual distance using Google Maps API
export const calculateTravelFee = async (zipCode: string): Promise<number> => {
  if (!isValidZipCode(zipCode) || zipCode === BASE_LOCATION) {
    return 0;
  }

  try {
    // Get coordinates for the base location
    const originResponse = await client.geocode({
      params: {
        address: `${BASE_LOCATION}, France`,
        key: GOOGLE_MAPS_API_KEY || "",
      },
    });

    // Get coordinates for the destination
    const destinationResponse = await client.geocode({
      params: {
        address: `${zipCode}, France`,
        key: GOOGLE_MAPS_API_KEY || "",
      },
    });

    if (
      originResponse.data.results.length === 0 ||
      destinationResponse.data.results.length === 0
    ) {
      console.error("Could not find coordinates for one or both locations");
      return 0;
    }

    // Calculate the distance between the two points
    const distanceResponse = await client.distancematrix({
      params: {
        origins: [originResponse.data.results[0].formatted_address],
        destinations: [destinationResponse.data.results[0].formatted_address],
        key: GOOGLE_MAPS_API_KEY || "",
      },
    });

    if (
      !distanceResponse.data.rows[0]?.elements[0]?.distance?.value
    ) {
      console.error("Could not calculate distance");
      return 0;
    }

    // Convert distance from meters to kilometers
    const distanceInKm = distanceResponse.data.rows[0].elements[0].distance.value / 1000;
    
    // Calculate fee: 10€ per 15km
    const numberOfSegments = Math.ceil(distanceInKm / 15);
    return numberOfSegments * 10;
  } catch (error) {
    console.error("Error calculating distance:", error);
    return 0;
  }
};