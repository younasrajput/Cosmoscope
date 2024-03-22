export default function timeDifferenceCounter(dateString: string): string {
  const currentDate = new Date();
  const date = new Date(dateString);

  const diff = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    if (days === 1) {
      if (hours % 24 === 0) {
        return "1 day ago";
      } else {
        const remainingHours = hours % 24;
        return `1 day and ${remainingHours} hours ago`;
      }
    } else {
      if (hours % 24 === 0) {
        return `${days} days ago`;
      } else {
        const remainingHours = hours % 24;
        return `${days} days and ${remainingHours} hours ago`;
      }
    }
  } else if (hours > 0) {
    if (hours === 1) {
      if (minutes % 60 === 0) {
        return "1 hour ago";
      } else {
        const remainingMinutes = minutes % 60;
        return `1 hour and ${remainingMinutes} minutes ago`;
      }
    } else {
      if (minutes % 60 === 0) {
        return `${hours} hours ago`;
      } else {
        const remainingMinutes = minutes % 60;
        return `${hours} hours and ${remainingMinutes} minutes ago`;
      }
    }
  } else if (minutes > 0) {
    if (minutes === 1) {
      if (seconds % 60 === 0) {
        return "1 minute ago";
      } else {
        return `1 minute and ${seconds % 60} seconds ago`;
      }
    } else {
      return `${minutes} minutes ago`;
    }
  } else {
    return `${seconds} seconds ago`;
  }
}
