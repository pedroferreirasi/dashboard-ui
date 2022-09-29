import { User } from "./user.model";

export interface Activities {
  id: number;
  user: User;
  recordCreated: Date;
  activityDateTimeInitial: Date;
  activityDateTimeFinal: Date;
  distance: number;
  movingTime: string;
  paceMedium: string;
  calories: number;
  elevation: number;
  maxHeartRate: number;
  minHeartRate: number;
  splits: Split[];
}

export interface Split {
  id: number;
  splitKilometer: number;
  pacePerKilometer: string;
}
