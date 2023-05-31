export const getTime = tmz => {
  // Getting Date
  const date = new Date();
  const currentDateStr = date.toLocaleString("en-GB", { timeZone: tmz });
  const [dateValues, timeValues] = currentDateStr.split(", ");

  const [day, month, year] = dateValues.split("/");
  const [hours, minutes, seconds] = timeValues.split(":");

  const currentDate = new Date(
    new Date(+year, +month - 1, +day, +hours, +minutes, +seconds).toISOString()
  );

  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  return [secondRatio, minuteRatio, hourRatio];
};

// Setting Rotation For Hands
const rotation = function (hand, ratio) {
  hand.style.transform = `translateX(-50%) rotate(${ratio * 360}deg)`;
};

// Setting clock
export const setClock = (secondHand, minuteHand, hourHand, tmz) => {
  const [secondRatio, minuteRatio, hourRatio] = getTime(tmz);
  rotation(secondHand, secondRatio);
  rotation(minuteHand, minuteRatio);
  rotation(hourHand, hourRatio);
};