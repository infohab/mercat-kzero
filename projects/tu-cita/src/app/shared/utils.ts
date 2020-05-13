import * as moment from 'moment';

export function getReadableTime(timeSlot: number): string {
  const date = moment(timeSlot);
  return date.format('LT');
}
