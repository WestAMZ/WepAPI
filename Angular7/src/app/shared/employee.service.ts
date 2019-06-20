import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //Declaración de propieada formData de tipo Employee
  formData : Employee;
  readonly rootURL = "http://localhost:34824/api";

  constructor(private http : HttpClient) {}

  postEmployee(formData: Employee)
  {
    return this.http.post(this.rootURL + "/Employee",formData)
  }
}
