import { WorkingSegment } from './working-segment.class';

export interface WorkingDay {
  dayOfWeek: number;
  workingSegments: WorkingSegment[];
}
