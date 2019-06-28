import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service:EmployeeService,private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(emp:Employee)
  {
    this.service.formData = Object.assign({},emp);
    //De esta forma los cambios desde el formulario se cargan instantaneamente en la tabla (solo visualización)
    //this.service.formData = emp;
  }
  onDelete(id:number)
  {
    if(confirm("Are you realy sure of delete this record?"))
    {
      this.service.deleteEmployee(id).subscribe(res=>
        {
            this.service.refreshList();
            this.toastr.warning("Deleted succesfully","EMP. Register")
        });
    }
  }
}
