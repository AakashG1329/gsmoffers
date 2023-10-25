import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  isLoading=true;
  data: any;
  productData:any;
  searchString = '';
  constructor(private service:CommonService) {
   
    
  }
  ngOnInit(): void {
     this.getMobiles();
  }
    async getMobiles(){
    // this.data={
    //   searchText:this.searchString
    // }
    // console.log(this.data);
    
   await  this.service.GetMobilesProducts().subscribe(Response=>{
      // console.log(Response);
      this.productData=Response;
      this.isLoading=false;
    },
 err=>{
  this.isLoading=false;
 })
}
  // filterData(searchString: string): void {
  //   this.productData = this.data.filter((item: { name: string; }) =>
  //     item.name.toLowerCase().includes(searchString.toLowerCase())
  //   );
  // }
  // search() {
  //   var x = [];

  //   if (this.searchText == '') {
  //     this.employeeList = this.cEmployees;
  //   } else {
  //     this.filteredEmployees = this.employeeList.filter((element) => {
  //       element.name.toLowerCase() == this.searchText.toLowerCase();
  //     });

  //     this.employeeList = this.filteredEmployees;
  //   }
  // }
}
