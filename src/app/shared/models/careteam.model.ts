export interface CareTeam {
  status: status;
  category?: string[];
  name: string;
  subject?: string;
  period?: string;
  participant: Participant[]
}

interface Participant {
  member: string,
  onBehalfOf: string,
  period: string,
}

enum status {
  proposed = 'proposed',
  active = 'active',
  suspended = 'suspended',
  inactive = 'inactive',
  entered_in_error = 'entered in error'
}
