/**
 * @description Date Time Util
 * @author F1215
 */
import Logger from './logger';

// eslint-disable-next-line no-unused-vars
const Log = Logger.create('timeUitl');

/**
 * @param {string} dateTimeString
 * @param {boolean} isLocal
 * @returns 2020-01-23 11:22:33
 */
export function dateTimeToFomatting(dateTimeString, isLocal = false) {
  if (!dateTimeString) {
    return '';
  }
  let dateTimeAddedZ = dateTimeString;

  if (isLocal === false && dateTimeString.substr(-1) !== 'Z') {
    dateTimeAddedZ = `${dateTimeString}Z`;
  }
  const returned = new Date(dateTimeAddedZ);
  return `${returned.getFullYear()}-${(returned.getMonth() + 1).toString().padStart(2, '0')}-${returned.getDate().toString().padStart(2, '0')} ${returned.getHours().toString().padStart(2, '0')}:${returned.getMinutes().toString().padStart(2, '0')}:${returned.getSeconds().toString().padStart(2, '0')}`;
}

/**
 * @param {string} dateTimeString
 * @param {boolean} isLocal
 * @returns 11:22:33
 */
export function timeToFomatting(dateTimeString, isLocal = false) {
  if (!dateTimeString) {
    return '';
  }
  let dateTimeAddedZ = dateTimeString;

  if (isLocal === false && dateTimeString.substr(-1) !== 'Z') {
    dateTimeAddedZ = `${dateTimeString}Z`;
  }
  const returned = new Date(dateTimeAddedZ);
  return `${returned.getHours().toString().padStart(2, '0')}:${returned.getMinutes().toString().padStart(2, '0')}:${returned.getSeconds().toString().padStart(2, '0')}`;
}

/**
 * @param {Date} dateTime
 * @param {boolean} isZero
 * @returns ISOString
 */
export function toISOStringWithTimeReset(dateTime, isZero) {
  if (!dateTime) {
    return '';
  }
  const newDate = isZero
    ? new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate(), 0, 0, 0)
    : new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate(), 23, 59, 59);
  return newDate.toISOString();
}

/**
 * @param {Date} dateTime
 * @returns 2020-01-23
 */
export function dateToString(dateTime) {
  if (!dateTime) {
    return '';
  }
  return `${dateTime.getFullYear()}-${(dateTime.getMonth() + 1).toString().padStart(2, '0')}-${dateTime.getDate().toString().padStart(2, '0')}`;
}

/**
 * @param {Date} dateTime
 * @returns 11:22:33
 */
export function timeToString(dateTime) {
  if (!dateTime) {
    return '';
  }
  return `${dateTime.getHours().toString().padStart(2, '0')}:${dateTime.getMinutes().toString().padStart(2, '0')}:${dateTime.getSeconds().toString().padStart(2, '0')}`;
}

/**
 * @param {Date} dateTime
 * @returns 2020-01-23T11:22:33
 */
export function dateTimeToJava(dateTime) {
  if (!dateTime) {
    return '';
  }
  return `${dateToString(dateTime)}T${timeToString(dateTime)}`;
}

/**
 * @param {Date} toDate
 * @param {Date} fromDate
 * @returns difference of date
 */
export function diffDate(toDate, fromDate) {
  if (!toDate || !fromDate) {
    return 0;
  }

  const _toDate = new Date(toDate);
  const _fromDate = new Date(fromDate);

  return _toDate - _fromDate;
}
