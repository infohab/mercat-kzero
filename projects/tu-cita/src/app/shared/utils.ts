import * as moment from 'moment';

export function getReadableTime(timeSlot: number): string {
  const date = moment(timeSlot);
  return date.format('LT');
}

export function getReadableDate(date: Date): string {
  return moment(date).format('dddd, DD MMM');
}
