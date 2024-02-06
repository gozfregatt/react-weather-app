export const formatUnixTimeToHHMM = (unixTime) => {
  const date = new Date(unixTime * 1000); // Multiply by 1000 to convert from seconds to milliseconds

  const hours = date.getHours().toString().padStart(2, '0'); // Ensure two-digit format
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
}