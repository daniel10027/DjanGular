import { SharedService } from './../../shared.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() dep: any;
  DepartmentId: string;
  DepartmentName: string;

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  // tslint:disable-next-line: typedef
  addDepartment(){

    const val = {
            DepartmentId: this.DepartmentId,
            DepartmentName: this.DepartmentName,
    };
    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    });

  }

  // tslint:disable-next-line: typedef
  updateDepartment(){

    const val = {
            DepartmentId: this.DepartmentId,
            DepartmentName: this.DepartmentName,
    };
    this.service.updateDepartment(val).subscribe(res => {
      alert(res.toString());
    });

  }


}
