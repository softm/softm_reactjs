import moment from "moment";

export function dateStringToUTCEpoch(dateString) {
  const utcString = new Date(dateString).toUTCString();
  console.log("utc", utcString);

  const epoch = moment(utcString).unix();
  console.log("epoch", epoch);

  return epoch;
}

export function currentDateString() {
  return moment().format("YYYY-MM-DD");
}

export function currentTimeString() {
  return moment().format("HH:mm:ss");
}

export function currentDateTimeString() {
  const date = moment().format("YYYY-MM-DD");
  const time = moment().format("HH:mm:ss");

  return date + " " + time;
}

export function prevDateString(subtract) {
  return moment().subtract(subtract, "days").format("YYYY-MM-DD");
}

export function prevDateTimeString(subtract) {
  const date = moment().subtract(subtract, "days").format("YYYY-MM-DD");
  const time = moment().format("HH:mm:ss");

  return date + " " + time;
}

export function getPrevDateFormatString(formatString, subtract) {
  const date = moment().subtract(subtract, "days").format(formatString);

  return date;
}

export function getCurrentDateFormatString(formatString) {
  return moment().format(formatString);
}

export function isExpired(exp) {
  return moment.unix(exp).isBefore(Date.now());
}
