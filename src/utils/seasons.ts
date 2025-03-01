export default function getSeasonClass() {
  const month = new Date().getMonth() + 1;

  if (month >= 3 && month <= 5) {
    return "sping";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 11) {
    return "fall";
  } else {
    return "winter";
  }
}
