export const formatDateTime = (date: string, noTime?: boolean): string => {
  // Convert the string timestamp to a Date object
  const parsedDate = new Date(date);

  // Format the date as MM/DD/YYYY
  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  // Format the time as HH:MM:SS
  const formattedTime = parsedDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return `${formattedDate} ${noTime ? formattedTime : ""}`;
};
