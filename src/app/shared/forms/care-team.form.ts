import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

export function getCareTeamForm(): FormGroup {
  return new FormGroup({
    status: new FormControl('',[Validators.required]),
    category: new FormArray([]),
    name: new FormControl('',[Validators.required]),
    subject: new FormControl(''),
    period: new FormGroup({
      start: new FormControl(''),
      end: new FormControl('')
    }),
    participant: new FormArray([
      new FormGroup({
        member: new FormControl(''),
        onBehalfOf: new FormControl('')
      })
    ],[Validators.required])
  })
}
