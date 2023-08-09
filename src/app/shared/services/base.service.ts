import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
URL= '';
EMPLOYEE_REGISTER =environment.apiUrl + 'employee/register';
CONTRACTOR_REGISTER= environment.apiUrl + 'contractor/register';

  constructor() { }
}
