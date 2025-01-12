type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

export default function timeAgo(timestamp: Timestamp | string): string {
  let createdAt: Date;

  if (typeof timestamp === "string") {
    // Parse ISO string to Date object
    createdAt = new Date(timestamp);
  } else if (
    typeof timestamp === "object" &&
    timestamp.seconds !== undefined &&
    timestamp.nanoseconds !== undefined
  ) {
    // Convert Firestore Timestamp object to Date object
    createdAt = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6
    );
  } else {
    return "Invalid timestamp";
  }

  const secondsAgo = Math.floor((Date.now() - createdAt.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const interval in intervals) {
    const counter = Math.floor(secondsAgo / intervals[interval]);
    if (counter > 0) {
      return counter === 1
        ? `${counter} ${interval} ago`
        : `${counter} ${interval}s ago`;
    }
  }

  return "Just now";
}
