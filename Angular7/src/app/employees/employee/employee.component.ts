import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service :EmployeeService) { }

  ngOnInit() {
    //Calling the reset form method that is below
    this.resetForm();
  }
  //Initialize  fomrData 
  resetForm(form?: NgForm)
  {
    if(form != null)
    {
      form.resetForm();
    }
    this.service.formData = {
        EmployeeID : null,
        FullName : '',
        Position : '',
        EMPCode : '',
        Mobile : ''
    }
  }
  //Recepción de envio de formulario
  onSubmit(form : NgForm)
  {
    this.insertReord(form);
  }
  //Función de insertado
  insertReord(form:NgForm)
  {
    this.service.postEmployee(form.value).subscribe(res=>{
        
    });
  }
}
