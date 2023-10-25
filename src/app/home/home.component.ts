import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
await (await this.service.GetProducts()).subscribe(Response=>{
  console.log(Response);
  this.productData=Response;
  this.isLoading=false;
})
  }
}
