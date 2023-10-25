import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
/**
   *
   */
isLoading=true;
productData:any;
searchString = '';
constructor(private service:CommonService) {
 
  
}
ngOnInit(): void {
   this.getMobiles();
}
async getMobiles(){
await (await this.service.getElectronicProducts()).subscribe(Response=>{
console.log(Response);
this.productData=Response;
this.isLoading=false;
})
}
}
