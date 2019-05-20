import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //Declaración de propieada formData de tipo Employee
  formData : Employee;

  constructor() { }
}
