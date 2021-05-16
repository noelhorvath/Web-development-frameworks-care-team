import {Participant} from "./participant.model";

export interface CareTeam{
  status: string;
  category?: string[];
  name: string;
  subject?: string;
  period?: string;
  participant: Participant[]
}
