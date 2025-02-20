import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { promises } from "dns";
import { Observable } from "rxjs";
interface ErrorValidate { [s:string]: boolean}
@Injectable({providedIn: 'root'})
export class ValidadoresService {
    constructor() {}
    existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {
        if( !control.value ) {
          return Promise.resolve( {} as ErrorValidate );
        }
        
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if ( control.value === 'ricardo' ) {
              resolve({ existe: true });
            } else {
              resolve({} as ErrorValidate );
            }
          }, 3500 );
        });
      }
      
      noEjemplo( control: FormControl ): ErrorValidate {
        if( control.value?.toLowerCase() === 'ejemplo' ){
          return { noEjemplo: true };
        }
        
        return {} as ErrorValidate;
      }
      
      passwordsIguales( pass1Name: string, pass2Name: string ) {
        return ( formGroup: FormGroup ) => {
          const pass1Control = formGroup.controls[pass1Name];
          const pass2Control = formGroup.controls[pass2Name];
      
          if ( pass1Control.value === pass2Control.value ) {
            pass2Control.setErrors(null);
          } else {
            pass2Control.setErrors({ noEsIgual: true });
          }
        }
      }      
}