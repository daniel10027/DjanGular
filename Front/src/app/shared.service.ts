import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = 'http://127.0.0.1:8000';
readonly PhotoUrl = 'http://127.0.0.1:8000/media/';

  constructor(private http: HttpClient) { }

  getDepList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }
// tslint:disable-next-line: typedef
  addDepartment(val: any){
    return this.http.post(this.APIUrl + '/department/', val);
  }
// tslint:disable-next-line: typedef
  updateDepartment(val: any){
    return this.http.put(this.APIUrl + '/department/', val);
  }
// tslint:disable-next-line: typedef
  deleteDepartment(val: any){
    return this.http.delete(this.APIUrl + '/department/' + val);
  }


  getEmpList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }
// tslint:disable-next-line: typedef
  addEmployee(val: any){
    return this.http.post(this.APIUrl + '/employee/', val);
  }
// tslint:disable-next-line: typedef
  updateEmployee(val: any){
    return this.http.put(this.APIUrl + '/employee/', val);
  }
// tslint:disable-next-line: typedef
  deleteEmployee(val: any){
    return this.http.delete(this.APIUrl + '/employee/' + val);
  }

  // tslint:disable-next-line: typedef
  UploadPhoto(val: any){
    return this.http.post(this.APIUrl + '/SaveFile', val);
  }

  getAllDepartmentNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }


}
