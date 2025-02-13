export function windDirectionConverter(windDirection: number) {
  let convertedWindDirection;

  if (windDirection >= 337.5 || windDirection <= 22.5) {
    convertedWindDirection = "С";
  } else if (windDirection >= 22.5 && windDirection <= 67.5) {
    convertedWindDirection = "СВ";
  } else if (windDirection >= 67.5 && windDirection <= 112.5) {
    convertedWindDirection = "В";
  } else if (windDirection >= 112.5 && windDirection <= 157.5) {
    convertedWindDirection = "ЮВ";
  } else if (windDirection >= 157.5 && windDirection <= 202.5) {
    convertedWindDirection = "Ю";
  } else if (windDirection >= 202.5 && windDirection <= 247.5) {
    convertedWindDirection = "ЮЗ";
  } else if (windDirection >= 247.5 && windDirection <= 292.5) {
    convertedWindDirection = "З";
  } else if (windDirection >= 292.5 && windDirection <= 337.5) {
    convertedWindDirection = "СВ";
  }

  return convertedWindDirection;
}
