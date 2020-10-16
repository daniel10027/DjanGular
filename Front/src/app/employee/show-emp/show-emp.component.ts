import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  constructor(private serivice: SharedService) { }

  EmployeeList: any[];
  ModalTitle: string;
  ActivateAddEditEmpComp: boolean = false;
  emp: any;

  EmployeeNameFilter: string;
  EmployeeListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  // tslint:disable-next-line: typedef
  addClick(){
    this.emp = {
      EmployeeId: 0,
      EmployeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'null.jpeg'
    };
    this.ModalTitle = 'Ajouter un employe';
    this.ActivateAddEditEmpComp = true;

  }
  // tslint:disable-next-line: typedef
  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  // tslint:disable-next-line: typedef
  editClick(item: any){
    this.emp = item;
    this.ModalTitle = 'Modifier un employé';
    this.ActivateAddEditEmpComp = true;
  }

  // tslint:disable-next-line: typedef
  deleteClick(item: { EmployeeId: any; }){
    if (confirm('Voulez vous supprimer ce employé ?')){
      this.serivice.deleteEmployee(item.EmployeeId).subscribe(data => {
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }


  // tslint:disable-next-line: typedef
  refreshEmpList(){
    this.serivice.getEmpList().subscribe(data => {
       this.EmployeeList = data;
    });
  }


  FilterFn(){
    var EmployeeNameFilter = this.EmployeeNameFilter;


    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el){
        return el.EmployeeName.toString().toLowerCase().includes(
          EmployeeNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  // tslint:disable-next-line: typedef
  sortResult(prop, asc){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a,b){
      if (asc){

        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? - 1 : 0 ) ;

      }else{

        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? - 1 : 0 ) ;
      }
    });
  }

}
