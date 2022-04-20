import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { AddlaptopComponent } from './addlaptop/addlaptop.component';
import { DetailComponent } from './detail/detail.component';
import { LaptopComponent } from './laptop/laptop.component';


const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },
{ path: 'registration', component: RegisterComponent },
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{path:'add',component:AddlaptopComponent},
{path:'view',component:DetailComponent},
{path:'laptop', component:LaptopComponent}

]

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }