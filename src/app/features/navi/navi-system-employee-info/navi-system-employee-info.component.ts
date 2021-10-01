import { Component, OnInit } from '@angular/core';
import { SystemEmployee } from 'src/app/models/system-employee/system-employee';
import { SystemEmployeeService } from 'src/app/services/system-employee/system-employee.service';

@Component({
  selector: 'app-navi-system-employee-info',
  templateUrl: './navi-system-employee-info.component.html',
  styleUrls: ['./navi-system-employee-info.component.css']
})
export class NaviSystemEmployeeInfoComponent implements OnInit {
 systemEmployee:SystemEmployee;
 value:any;
 systemEmployeeLogged:boolean;
  constructor(private systemEmployeeService: SystemEmployeeService) { }

  ngOnInit(): void {
    this.getSystemEmployeeInfo();
  }

  signOut(){
    localStorage.clear()
  }

  // getSystemEmployeeInfo() {
  //   let user=JSON.parse(localStorage.getItem("systemEmployee"))
  //   console.log(this.systemEmployee)

  //   this.systemEmployee=user.data
  //   return this.systemEmployee;
       
    
  // }

  getSystemEmployeeInfo(): any{
    this.value = JSON.parse(localStorage.getItem('user'));
    if (this.value.message === "systemEmployee Logged in"){
      this.systemEmployeeService.getSystemEmployeeById(this.value.data.id).subscribe((response: any)=>{
        this.systemEmployee = response.data;
      });
      this.systemEmployeeLogged = true;
    } else{
      this.systemEmployeeLogged = false;
    }
    return this.value.data;
  }

}
