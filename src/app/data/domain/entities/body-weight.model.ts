import { User } from "./user.model";

export interface BodyWeight {
  id: number;
  recordCreated: Date;
  user: User;
  weihtDate: string;
  weight: number;
  visceralFat: number;
  imc: number;
  bodyFat: number;
}
