// Function to check if a zip code is valid (starts with 69)
export const isValidZipCode = (zipCode: string): boolean => {
  return /^69\d{3}$/.test(zipCode);
};

// Function to calculate travel fee based on zip code
export const calculateTravelFee = (zipCode: string): number => {
  // Base case: if zip code is 69410 (Champagne-au-Mont-d'Or) or invalid, no fee
  if (!isValidZipCode(zipCode) || zipCode === "69410") {
    return 0;
  }

  // Simple distance calculation based on zip code difference
  // This is a simplified version - in real world, you'd want to use a proper distance API
  const distance = Math.abs(parseInt(zipCode) - 69410);
  
  // If distance > 15 (simplified representation of 15km), apply fee
  return distance > 15 ? 10 : 0;
};