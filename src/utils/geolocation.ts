export function getGeolocation() {
  let lat: number = 0;
  let lon: number = 0;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        lat = position.coords.latitude; // Широта
        lon = position.coords.longitude; // Долгота
        console.log(lat, lon);
        return { latitude: lat, longitude: lon };
      },
      (error) => {
        console.error("Ошибка получения геолокации:", error.message);
      }
    );
  } else {
    console.error("Geolocation не поддерживается вашим браузером.");
  }

  //   console.log(lat, lon);

  return { latitude: lat, longitude: lon };
}
