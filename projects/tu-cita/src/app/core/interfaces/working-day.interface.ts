import { WorkingSegment } from './working-segment.interface';

export interface WorkingDay {
  dayOfWeek: number;
  workingSegments: WorkingSegment[];
}
