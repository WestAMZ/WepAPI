import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service :EmployeeService,
              private  toastr: ToastrService) { }

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
    this.insertRecord(form);
  }
  //Función de insertado
  insertRecord(form:NgForm)
  {
    this.service.postEmployee(form.value).subscribe(res=>{
      this.toastr.success("Inserted succesfully","EMP. Register")
      this.resetForm(form);
    });
  }
}
