export default function dayDifferenceCounter(endTime: string): string {
  const endDate: Date = new Date(endTime);
  const currentDate: Date = new Date();

  const difference: number = endDate.getTime() - currentDate.getTime();
  const daysDifference: number = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (daysDifference < 0) {
    return `Voting ended ${Math.abs(daysDifference)} ${
      Math.abs(daysDifference) === 1 ? "day" : "days"
    } ago`;
  } else if (daysDifference === 0) {
    return "Voting ends today";
  } else {
    return `Voting ends in ${daysDifference} ${
      daysDifference === 1 ? "day" : "days"
    }`;
  }
}
