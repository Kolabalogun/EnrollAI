export const formatDateTime = (date: string, noTime?: boolean): string => {
  // Convert the string timestamp to a Date object
  const parsedDate = new Date(date);

  // Format the date as "Month day, year" (e.g., July 7, 2024)
  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    month: "long",  // Full month name
    day: "numeric", // Day as a number
    year: "numeric" // Full year
  });

  // Format the time as HH:MM:SS (optional)
  const formattedTime = parsedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return `${formattedDate}${!noTime ? ` ${formattedTime}` : ""}`;
};
