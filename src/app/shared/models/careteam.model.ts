import {Participant} from "./participant.model";

export interface CareTeam{
  id?: string;
  status: string;
  category?: string[];
  name: string;
  subject?: string;
  period?: string;
  participant: Participant[]
}
