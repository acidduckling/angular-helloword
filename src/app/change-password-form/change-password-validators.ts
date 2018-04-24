import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ChangePasswordValidators {

    static invalidMatch(controlName: string) : ValidatorFn {
        return (control: AbstractControl) : ValidationErrors | null => {
            let value = control.parent ? control.parent.get(controlName).value : null;
            if(control.value === value) return null;

            return { invalidMatch: true }
        }        
    }

    //Asynchronous validators...
    static isCorrectPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise<ValidationErrors>((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== '1234')
                    resolve({isCorrectPassword: false});
                else
                    resolve(null);
            }, 2000);
        });
    }
}