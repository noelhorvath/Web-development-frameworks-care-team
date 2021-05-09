export interface Practitioner {
  id: string;
  name: string;
  gender: gender;
  birthDate: Date;
}

enum gender {
  male='Male',
  female='Female',
  other='Other',
  unknown='Unknown'
}
