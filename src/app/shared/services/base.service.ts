import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
URL= '';
EMPLOYEE_REGISTER =environment.apiUrl + 'employee/register';
CONTRACTOR_REGISTER= environment.apiUrl + 'contractor/register';
GET_STATE= environment.apiUrl + 'countries-states/all';
GET_CITYBY_ID = environment.apiUrl + 'states-cities/all?country_state=';
SUPER_ADMIN = environment.apiUrl + 'auth ';
  constructor() { }
}
