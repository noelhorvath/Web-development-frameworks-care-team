import {Participant} from "./participant.model";
import {Period} from "./period.model";

export interface CareTeam{
  id?: string;
  status: string;
  category?: string[];
  name: string;
  subject?: string;
  period?: Period;
  participant: Participant[]
}
