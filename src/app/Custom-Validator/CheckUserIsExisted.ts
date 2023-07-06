import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Function to check a Email is exists
// Sync validators	
export function checkUserIsExisted(emailExited : string[]) : ValidatorFn
{
  let CheckUser = (control : AbstractControl) : ValidationErrors | null => {
    let checkUserisEmail : string = control.value;
    let validtorError = {"exaitEmail" : {'value' : checkUserisEmail }}
    if (checkUserisEmail.length == 0 && control.untouched)  return null;
    let FoundEmail = emailExited.includes(checkUserisEmail);
    return FoundEmail ? validtorError : null
  }
  return CheckUser;
}