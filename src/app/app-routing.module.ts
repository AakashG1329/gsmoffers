import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ElectronicsComponent } from './electronics/electronics.component';

const routes: Routes = [{ path: 'home', component: HomeComponent },
 { path: 'mobiles', component: MobilesComponent },
 { path: '', pathMatch: 'full', redirectTo: 'home' },
 { path: 'electronics', component: ElectronicsComponent }
  // { path: 'second-component', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
