import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError, debounceTime, switchMap, first } from 'rxjs/operators';
import { AmazontService } from '../services/amazont.service';

export function correoExisteValidator(amazontService: AmazontService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return control.valueChanges.pipe(
      debounceTime(300),
      switchMap((value) =>
        amazontService.verificarCorreo(value).pipe(
          catchError(() => of(null)), // Si la API responde 404, el correo NO existe y la validación pasa.
          map(() => ({ correoExiste: true })) // Si la API responde 200, el correo existe y muestra error.
        )
      ),
      first()
    );
  };
}
