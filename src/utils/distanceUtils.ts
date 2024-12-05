// Function to check if a zip code is valid (French postal code format)
export const isValidZipCode = (zipCode: string): boolean => {
  return /^\d{5}$/.test(zipCode);
};

// Function to calculate travel fee based on zip code
export const calculateTravelFee = (zipCode: string): number => {
  // Base case: if zip code is invalid or same as home (69410)
  if (!isValidZipCode(zipCode) || zipCode === "69410") {
    return 0;
  }

  // Simple distance calculation based on first two digits difference
  // This is a simplified version - in real world, you'd want to use a proper distance API
  const clientDepartment = parseInt(zipCode.substring(0, 2));
  const homeDepartment = 69;
  
  // Calculate rough distance (this is a simplified calculation)
  const departmentDifference = Math.abs(clientDepartment - homeDepartment);
  const estimatedDistance = departmentDifference * 15; // Rough estimate: 15km per department difference
  
  // Calculate fee: 10€ per 15km
  const numberOfSegments = Math.ceil(estimatedDistance / 15);
  return numberOfSegments * 10;
};
