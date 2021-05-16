import {Participant} from "./participant.model";
import {Period} from "./period.model";

export interface CareTeam{
  status: string;
  category?: string[];
  name: string;
  subject?: string;
  period?: Period;
  participant: Participant[]
}
