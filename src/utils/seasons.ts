export default function getSeasonClass() {
  return "winter";
  const month = new Date().getMonth() + 1;

  if (month >= 3 && 5 <= month) {
    return "sping";
  } else if (month >= 6 && 8 <= month) {
    return "summer";
  } else if (month >= 9 && 11 <= month) {
    return "fall";
  } else {
    return "winter";
  }
}
