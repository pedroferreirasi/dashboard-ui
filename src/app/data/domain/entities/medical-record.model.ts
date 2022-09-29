import { User } from "./user.model";

export interface MedicalRecord {
  id: number;
  user: User;
  healthProblems: string;
  medicalProblems: string;
  healthCarePlan: string;
  medications: string;
  bloodGroup: string;
  organDonor: boolean;
}
