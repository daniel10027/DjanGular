import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private serivice: SharedService) { }

  DepartmentList: any[];
  ModalTitle: string;
  ActivateAddEditDepComp: boolean = false;
  dep: any;

  DepartmentIdFilter: string;
  DepartmentNameFilter: string;
  DepartmentListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshDepList();
  }

  // tslint:disable-next-line: typedef
  addClick(){
    this.dep = {
      DepartmentId: 0,
      DepartmentName: ''
    };
    this.ModalTitle = 'Ajouter un departement';
    this.ActivateAddEditDepComp = true;

  }
  // tslint:disable-next-line: typedef
  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  // tslint:disable-next-line: typedef
  editClick(item: any){
    this.dep = item;
    this.ModalTitle = 'Modifier un departement';
    this.ActivateAddEditDepComp = true;
  }

  // tslint:disable-next-line: typedef
  deleteClick(item){
    if (confirm('Voulez vous supprimer ce departement ?')){
      this.serivice.deleteDepartment(item.DepartmentId).subscribe(data => {
        alert(data.toString());
        this.refreshDepList();
        this.ActivateAddEditDepComp = false;
      });
    }
  }


  // tslint:disable-next-line: typedef
  refreshDepList(){
    this.serivice.getDepList().subscribe(data => {
       this.DepartmentList = data;
       this.DepartmentListWithoutFilter = data;
    });
  }

  FilterFn(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListWithoutFilter.filter(function (el){
        return el.DepartmentId.toString().toLowerCase().includes(
          DepartmentIdFilter.toString().trim().toLowerCase()
        )&&
        el.DepartmentName.toString().toLowerCase().includes(
          DepartmentNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  // tslint:disable-next-line: typedef
  sortResult(prop, asc){
    this.DepartmentList = this.DepartmentListWithoutFilter.sort(function(a,b){
      if (asc){

        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? - 1 : 0 ) ;

      }else{

        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? - 1 : 0 ) ;
      }
    });
  }
}
